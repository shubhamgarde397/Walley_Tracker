import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { DashBoardPage } from '../dashboard/dashboard';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = DashBoardPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}