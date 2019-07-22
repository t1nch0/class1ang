import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lolsucks',
  templateUrl: './lolsucks.component.html',
  styleUrls: ['./lolsucks.component.css']
})

export class LolsucksComponent implements OnInit {

  constructor(private lolsucks: LolsucksComponent, private a: string) { }

  ngOnInit() {
  }
  getQuotes() {
    return this.lolsucks.getQuotes().subscribe(data => {
      this.a = data.quote;
      this.a = data.author;
      return data;
    })
  }
}
