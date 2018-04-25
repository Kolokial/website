import { Component } from '@angular/core';
import fontawesome, { IconDefinition } from '@fortawesome/fontawesome';
import { faDatabase, faServer, faRocket, faCode, faMusic, faHeadphones } from '@fortawesome/fontawesome-free-solid';
import {
  faHtml5, faJsSquare, faPhp, faLinux,
  faCss3Alt, faWordpress, faPaypal, faAngular, faTrello, faGit, faNodeJs,
  faNode, faNpm, faDAndD, faFontAwesomeAlt, faFontAwesome, faSass,
  faSteam,
  faTwitter,
  faLinkedin,
  faStackOverflow,
  faDigitalOcean,
  faAmazon,
  faBitbucket
} from '@fortawesome/fontawesome-free-brands';
import { IconContainer } from './skillList/skillList.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public techTitle = 'Tech';
  public techIcons: IconContainer[] = [
    { title: 'CSS3', fontIcon: faCss3Alt },
    { title: 'HTML5', fontIcon: faHtml5 },
    { title: 'JavaScript', fontIcon: faJsSquare },
    { title: 'PHP', fontIcon: faPhp },
    { title: 'MySQL', fontIcon: faDatabase },
    { title: 'Linux CLI', fontIcon: faLinux },
    { title: 'Angular', fontIcon: faAngular },
    { title: 'Digial Ocean', fontIcon: faDigitalOcean },
    { title: 'PayPal', fontIcon: faPaypal },
    { title: 'WordPress', fontIcon: faWordpress },
    { title: 'Git', fontIcon: faGit },
    { title: 'BitBucket', fontIcon: faBitbucket },
    { title: 'Apache', fontIcon: faServer },
    { title: 'Font Awesome', fontIcon: faFontAwesome },
    { title: 'SASS', fontIcon: faSass }
  ];

  public personalTitle = 'Me';
  public personalIcons: IconContainer[] = [
    { title: 'Code', fontIcon: faCode },
    { title: 'Space', fontIcon: faRocket },
    { title: 'Music', fontIcon: faHeadphones },
    { title: 'D&D', fontIcon: faDAndD },
    { title: 'Wishlist', fontIcon: faAmazon, link: 'http://amzn.eu/d7jCBPU/' },
    { title: 'Gaming', fontIcon: faSteam }
  ];

  public contactTitle = 'Comms';
  public contactIcons: IconContainer[] = [
    { fontIcon: faTwitter, link: 'https://twitter.com/LuckGary/' },
    { fontIcon: faLinkedin, link: 'https://www.linkedin.com/in/gary-luck-58aa0941/' },
    { fontIcon: faStackOverflow, link: 'https://stackoverflow.com/users/1523771/gary' }
  ];
}
