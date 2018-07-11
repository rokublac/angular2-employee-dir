import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoggingService } from '../loggin.service';
import { DataService } from '../data.service';

declare var firebase: any;


@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  providers: [DataService]
})
export class DirectoryComponent implements OnInit {

	employees = [];

	constructor(private logger: LoggingService, private dataService: DataService) { }

	logIt(){
		this.logger.log();
	}

	ngOnInit() {
		//this.dataService.fetchData().subscribe((data) => this.employees = data);

		// initalise firebase API connection
		this.fbGetData();
	}

	// firebase API method
	fbGetData(){
		// reference root directory '/' of the firebase database since no collection were made
		// event trigger - when new child is added
		firebase.database().ref('/').on('child_added', (snapshot) => {
			//snapshot.val() will get readable data from the database
			// push the data object retrieved from Firebase into the 'employees' array
			this.employees.push(snapshot.val());
		});
	}

	// push data collected from the directory view to the direbase database.
	fbPostData(name, position, cCode){
		firebase.database().ref('/').push({name: name, position: position, cCode: cCode});
	}

}
