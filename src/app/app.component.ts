import { Component } from '@angular/core';
import { faDatabase, faCode, faHeadphones, faCameraRetro, faAddressCard,
  faSpaceShuttle, faFilePdf } from '@fortawesome/fontawesome-free-solid';
import {
  faHtml5, faJsSquare, faPhp, faCss3Alt,
  faWordpress, faPaypal, faAngular,
  faDAndD, faSass, faSteam, faTwitter, faLinkedin,
  faStackOverflow, faAmazon, faGithub
} from '@fortawesome/fontawesome-free-brands';
import { IconContainer } from './components/skillList/skillList.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

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

  public personalIconSize = '2x';
  public personalIcons: IconContainer[] = [
    { title: 'Code', fontIcon: faCode },
    { title: 'Space', fontIcon: faSpaceShuttle },
    { title: 'Music', fontIcon: faHeadphones, link: 'To do!' },
    { title: 'D&D', fontIcon: faDAndD },
    { title: 'Wishlist', fontIcon: faAmazon, link: 'http://amzn.eu/d7jCBPU/' },
    { title: 'Buy me a coffe?', fontIcon: faPaypal, link: 'http://paypal.me/garyluck' },
    { title: 'Gaming', fontIcon: faSteam },
    { title: 'Photography', fontIcon: faCameraRetro, link: '/photos' }
  ];

  public contactIconSize = '1x';
  public contactIcons: IconContainer[] = [
    { fontIcon: faTwitter, link: 'https://twitter.com/LuckGary/' },
    { fontIcon: faLinkedin, link: 'https://www.linkedin.com/in/gary-luck-58aa0941/' },
    { fontIcon: faStackOverflow, link: 'https://stackoverflow.com/users/1523771/gary' },
    { fontIcon: faGithub, link: 'https://github.com/Kolokial' },
    { fontIcon: faAddressCard, link: 'assets/misc/LuckGary.vcf' },
    { fontIcon: faFilePdf, link: 'assets/misc/LuckGaryCV.pdf'}
  ];
}
