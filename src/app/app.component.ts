import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

interface Data {
	id: string;
	fullname: string;
	email: string;
	status: string;
}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
	sub: Subscription;										//variable for managing subscription
	
	input = {											//form data
		fullname: null,
		email: null,
		status: 'default'
	};
	selectedInput: string;										//input field which user typed last time
	validFilters = {										//if filter input match with server data
		fullname: false,
		email: false
	};
	
	splittedArray;											//server records that contain input and splitted by input
	displaySuggestions: boolean;
	
	savedData: Array<Data>;										//contains all the data server has returned
	tableData: Array<Data>;										//displayed data in table
	noData: boolean;										//true if empty table
	
	displayScrollToTop: boolean;									//if true, scroll to top button is displayed
	
	constructor(private http: HttpClient) {}
	
	@HostListener('document:click') onClickAnywhere() {						//when user clicks
		if (this.displaySuggestions == true) {							//if suggestions are displayed
			this.displaySuggestions = false;						//hide suggestions
		}
	}
	
	@HostListener('window:scroll', ['$event']) onScroll(event:Event) {				//when user scrolls
		if (document.documentElement.scrollTop >= 200) {					//if he has scrolled down 200 pixels or more
			this.displayScrollToTop = true;							//display scroll to top button
		}
		else {
			this.displayScrollToTop = false;						//hide scroll to top button
		}
	}
	
	ngOnInit() {
		this.splittedArray = [];								//initialize variables
		this.displaySuggestions = false;
		this.selectedInput = null;
		
		this.getData();										//call function getData
	}
	
	getData() {
		let url: string = 'assets/data.json';							//this is the url from where site gets data
		
		this.sub = this.http.get<Data[]>(url).subscribe(data => {				//subscribe to server's response		
			this.savedData = data;								//assign server's response to a variable
			this.tableData = this.savedData;						//display server's response
			this.noData = (this.tableData.length > 0) ? false : true;			//update variable if server returned nothing or not
		}, error => {										//in case of error
			this.connectionErrorHandler();							//call function connectionErrorHandler
		});
	}
	
	generateSuggestions(inputName: string) {
		let tempArray, regex, existsInSuggestions;
		this.splittedArray = [];								//initialize variables
		this.displaySuggestions = false;
		this.selectedInput = inputName;
		this.validFilters[this.selectedInput] = false;
		
		if (!this.input[this.selectedInput]) {							//if input is empty
			this.filter();									//call function filter
			return;										//stop function's execution
		}
		else if (this.input[this.selectedInput].length < 3) {					//if input's length is less than 3 characters
			return;										//stop function's execution
		}
		
		existsInSuggestions = false;
		for (let row of this.savedData) {
			if (this.selectedInput == 'fullname') {						//for non unique properties
				for (let element of this.splittedArray) {
					if (element.value == row[this.selectedInput]) {			//check if there is a duplicate
						existsInSuggestions = true;
					}
				}
			}
			
			if (existsInSuggestions == false) {						//if there is no duplicate
				regex = new RegExp('(' + this.input[this.selectedInput] + ')', 'i');
													//this regular expression will search given server record for input
				tempArray = row[this.selectedInput].split(regex);			//split string by regular expression and store the result into array

				if (tempArray.length > 1) {						//if input exists in server record
					this.splittedArray.push({ value: row[this.selectedInput], splitted: tempArray });
													//push value and splitted array into array
				}
			}
		}
		
		if (this.splittedArray.length > 0) {							//if there is at least one match
			this.displaySuggestions = true;							//display suggestions
		}
	}
	
	selectSuggestion(value: string) {
		this.input[this.selectedInput] = value;							//set input to selected suggestion
		this.validFilters[this.selectedInput] = true;						//filter is valid
		
		this.filter();										//call function filter
	}
	
	search() {
		if (this.input.fullname) {								//if fullname input is not empty
			this.validFilters.fullname = true;						//fullname filter is valid
		}
		if (this.input.email) {									//if email input is not empty
			this.validFilters.email = true;							//email filter is valid
		}
		
		this.filter();										//call function filter
	}
	
	filter() {
		let tempData: Array<Data> = this.savedData;						//set server data to a variable
		
		if (this.validFilters.fullname == true) {						//if fullname filter is valid
			tempData = this.matchData(tempData, 'fullname');				//call function matchData that filters data by fullname
		}
		
		if (this.validFilters.email == true) {							//if email filter is valid
			tempData = this.matchData(tempData, 'email');					//call function matchData that filters data by email
		}
		
		if (this.input.status != 'default') {							//if status is not set to default value
			tempData = this.matchData(tempData, 'status');					//call function matchData that filters data by status
		}
		
		this.tableData = tempData;								//display data after filters are applied
		this.noData = (this.tableData.length > 0) ? false : true;				//update variable if there are data in table or not
	}
	
	resetFilters() {										//reset variables to default values
		this.input = {
			fullname: null,
			email: null,
			status: 'default'
		};
		this.validFilters = {
			fullname: false,
			email: false
		};
		this.displaySuggestions = false;
		this.tableData = this.savedData;
		this.noData = (this.tableData.length > 0) ? false : true;
	}
	
	scrollToTop() {
		document.body.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
	}
	
	trackByFn(index, row: Data) {									//improves performance when table is updated
		return row.id;
	}
	
	matchData(data: Array<Data>, property: string): Array<Data> {
		let matchedRows: Array<Data> = [];
		
		for (let row of data) {
			if (row[property] == this.input[property]) {					//if input and server record are matched
				matchedRows.push(row);							//push server record into array
				if (property == 'email') {						//if property is unique
					break;								//stop loop
				}
			}
		}
		
		return matchedRows;									//return matched server records
	}
	
	connectionErrorHandler() {
		this.savedData = [];									//no server data
		this.tableData = [];
		this.noData = true;
	}
	
	ngOnDestroy() {
		this.sub.unsubscribe();									//end subscription
	}
}
