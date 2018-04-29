import { Component } from '@angular/core';
import fontawesome, { IconDefinition } from '@fortawesome/fontawesome';
import { faDatabase, faServer, faRocket, faCode, faMusic, faHeadphones, faCameraRetro, faAddressCard } from '@fortawesome/fontawesome-free-solid';
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
  faBitbucket,
  faGithub
} from '@fortawesome/fontawesome-free-brands';
import { IconContainer } from './skillList/skillList.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // public techTitle = 'Tech';
  public techIconSize = '2x';
  public techIcons: IconContainer[] = [
    { title: 'CSS3', fontIcon: faCss3Alt },
    { title: 'HTML5', fontIcon: faHtml5 },
    { title: 'JavaScript', fontIcon: faJsSquare },
    { title: 'PHP', fontIcon: faPhp },
    { title: 'MySQL', fontIcon: faDatabase },
    { title: 'Angular', fontIcon: faAngular },
    { title: 'WordPress', fontIcon: faWordpress },
    { title: 'SASS', fontIcon: faSass }
  ];

  // public personalTitle = 'Me';
  public personalIconSize = '2x';
  public personalIcons: IconContainer[] = [
    { title: 'Code', fontIcon: faCode },
    { title: 'Space', fontIcon: faRocket },
    { title: 'Music', fontIcon: faHeadphones },
    { title: 'D&D', fontIcon: faDAndD },
    { title: 'Wishlist', fontIcon: faAmazon, link: 'http://amzn.eu/d7jCBPU/' },
    { title: 'Gaming', fontIcon: faSteam },
    { title: 'Photography', fontIcon: faCameraRetro }
  ];

  public contactIconSize = '1x';
  public contactIcons: IconContainer[] = [
    { fontIcon: faTwitter, link: 'https://twitter.com/LuckGary/' },
    { fontIcon: faLinkedin, link: 'https://www.linkedin.com/in/gary-luck-58aa0941/' },
    { fontIcon: faStackOverflow, link: 'https://stackoverflow.com/users/1523771/gary' },
    { fontIcon: faGithub, link: 'https://github.com/Kolokial' },
    { fontIcon: faAddressCard, link: 'assets/misc/LuckGary.vcf'}
  ];
}
