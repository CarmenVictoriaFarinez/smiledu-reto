import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

// Angular material
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';



// Components
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { AcordionsComponent } from './components/acordions/acordions.component';
import { MaxiCardComponent } from './components/maxi-card/maxi-card.component';
import { MenuComponentComponent } from './components/menu-component/menu-component.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ExpansionStudentComponent } from './components/expansion-student/expansion-student.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { BtnFabsComponent } from './components/btn-fabs/btn-fabs.component';



@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    AcordionsComponent,
    MaxiCardComponent,
    MenuComponentComponent,
    TabsComponent,
    ExpansionStudentComponent,
    DialogComponent,
    ConfirmDialogComponent,
    BtnFabsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    FormsModule,
    MatListModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    MatRippleModule,
    MatExpansionModule,
    MatMenuModule,
    MatTabsModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
