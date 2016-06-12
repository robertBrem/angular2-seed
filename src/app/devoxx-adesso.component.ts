import {Component} from "@angular/core";
import {MD_SIDENAV_DIRECTIVES} from "@angular2-material/sidenav";
import {MD_TOOLBAR_DIRECTIVES} from "@angular2-material/toolbar";
import {MD_CHECKBOX_DIRECTIVES} from "@angular2-material/checkbox";
import {MD_RADIO_DIRECTIVES, MdRadioDispatcher} from "@angular2-material/radio";
import {MD_PROGRESS_CIRCLE_DIRECTIVES} from "@angular2-material/progress-circle";
import {MD_PROGRESS_BAR_DIRECTIVES} from "@angular2-material/progress-bar";
import {MD_INPUT_DIRECTIVES} from "@angular2-material/input";
import {MD_LIST_DIRECTIVES} from "@angular2-material/list";
import {MD_ICON_DIRECTIVES, MdIconRegistry} from "@angular2-material/icon";
import {MD_TABS_DIRECTIVES} from "@angular2-material/tabs";
import {MD_CARD_DIRECTIVES} from "@angular2-material/card";
import {MD_BUTTON_DIRECTIVES} from "@angular2-material/button";

@Component({
  moduleId: module.id,
  selector: 'devoxx-adesso-app',
  templateUrl: 'devoxx-adesso.component.html',
  styleUrls: ['devoxx-adesso.component.css'],
  directives: [
    MD_SIDENAV_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MD_TOOLBAR_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    MD_CHECKBOX_DIRECTIVES,
    MD_RADIO_DIRECTIVES,
    MD_PROGRESS_CIRCLE_DIRECTIVES,
    MD_INPUT_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MD_PROGRESS_BAR_DIRECTIVES,
    MD_ICON_DIRECTIVES,
    MD_TABS_DIRECTIVES,
  ],
  providers: [MdRadioDispatcher, MdIconRegistry]
})
export class DevoxxAdessoAppComponent {
  title:string = 'Devoxx UK';
  talks:Object[] = [
    {title: "Dot Con", speakers: "James Veitch"},
    {title: "Planet Devoxx", speakers: "Mark Hazell, Stephan Janssen, Dan Hardiker, James McGivern"},
    {title: "Embracing failure", speakers: "Mazz Mosley"},
    {title: "Where's my free lunch?", speakers: "Hadi Hariri"},
    {
      title: "Kubernetes in production - blue-green deployment, auto scaling and deployment automation",
      speakers: "Paul Bakker"
    },
    {title: "The Silver BUllet Syndrome", speakers: "Hadi Hariri"},
    {title: "Building a unikernel Java Application", speakers: "Ray Tsang"},
    {
      title: "Creating a safe dev environment on a puglic Cloud with Docker, Jenkins, Rancher and OpenVPN",
      speakers: "Marc-Aurele Brothier"
    },
    {
      title: "To EE or not to EE",
      speakers: "Antonio Goncalves, David Blevins, Heather VanCura, Ian Robinson, Mark Little, Martijn Verburg, Peter Pilgrim"
    },
    {title: "Building Cognitive Applications with Watson", speakers: "Jonathan Kaufman"},
    {title: "Busy Java Developer's Guide to Hacking in Java", speakers: "Ted Neward"},
    {title: "Knowledge is Power: Getting out of trouble by understanding Git", speakers: "Steve Smith"},
    {title: "2020 Vision", speakers: "Dan Hardiker"},
    {title: "Skynet is being built, and it'll run on the JVM", speakers: "Roy van Rijn"},
    {title: "YoctoServices: The new, new, new reality", speakers: "Richard Warburton"},
    {title: "The next generation of coders: Code Club", speakers: "Jonathan Gallimore"},
    {title: "I Do Not Hate Apache Maven", speakers: "Andy Gumbrecht"},
    {title: "Thanks Managers!", speakers: "Arun Gupta"},
    {
      title: "Google Dataflow: The new open model for batch and streaming processing",
      speakers: "Ray Tsang, Felipe Hoffa"
    },
    {
      title: "Future of Development Panel",
      speakers: "Arun Gupta, Daniel Bryant, Amy Nicholson, Christopher Batey, Dan Hardiker"
    },
    {
      title: "DevOps - Microservices, containers, platforms, tooling... Oh yeah, and people",
      speakers: "Daniel Bryant, Steve Poole"
    },
    {
      title: "Monoliths to Microservices: Transforming the architecture of Criminal Justice",
      speakers: "Stephen Strudwick"
    },
    {title: "Scaling Engineering by Hacking Conway's Law", speakers: "Aviran Mordo"},
    {title: "Dev versus Ops", speakers: "Dan Hardiker"},
    {title: "The Java Council", speakers: "Martijn Verburg, Trisha Gee"},
    {title: "Docker and Kubernetes Recipes for Java Developers", speakers: "Arun Gupta"}
  ];
}
