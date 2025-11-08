import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Roadmap } from "../roadmap/roadmap";
import { Mentors } from "../../Providers/mentors/mentors";
import { Sessions } from "../sessions/sessions";

@Component({
  selector: 'app-explore',
  imports: [CommonModule, Roadmap, Mentors, Sessions],
  templateUrl: './explore.html',
  styleUrl: './explore.css',
})
export class Explore {
  tabs = ['Roadmap', 'Mentors', 'Sessions'];
  selectedTab = 'Roadmap';

  selectTab(tab: string) {
    this.selectedTab = tab;
  }

}