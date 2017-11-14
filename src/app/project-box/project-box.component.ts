import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Project } from '../project';

@Component({
  selector: 'app-project-box',
  templateUrl: './project-box.component.html',
  styleUrls: ['./project-box.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectBoxComponent implements OnInit {

  projectArray = [];

  constructor() {
  }

  ngOnInit() {
    this.projectArray.push(new Project("http://vignette2.wikia.nocookie.net/starwars/images/2/2d/Jedi_Temple_spires_ROTS.png/revision/latest?cb=20130215030848", "Jedi Temple", "One of our greatest projects to date, this is."));
    this.projectArray.push(new Project("http://www.iacconline.org/_memberassets/images/7423853_17_Conf%20Center%20Exterior.jpg", "Angular Conference Center", "Cutting edge design."));
    this.projectArray.push(new Project("https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/International_Space_Station_after_undocking_of_STS-132.jpg/300px-International_Space_Station_after_undocking_of_STS-132.jpg", "International Space Station", "A project out of this world."));
  }
}
