import { Component, OnInit } from '@angular/core';
import { EditService, ToolbarService, PageService, SortService, FilterService, GridModule } from '@syncfusion/ej2-angular-grids';



@Component({
  selector: 'app-tabella',
  standalone: true,
  templateUrl: './tabella.component.html',
  styleUrl: './tabella.component.scss',
  providers: [ToolbarService, EditService, PageService, SortService, FilterService],
  imports: [GridModule]
})
export class TabellaComponent {

}