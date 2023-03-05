import { RoomList } from './../rooms/rooms';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, OnInit, SimpleChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnChanges,OnDestroy {

  @Input() price:any;
  @Input() rooms: RoomList[] = [];
  @Input() title: string = '';
  @Output() roomsselected = new EventEmitter<RoomList>()

  selectRoom(rooms: RoomList) {
   this.roomsselected.emit(rooms)
  }
  ngOnChanges(changes:SimpleChanges) {
    console.log(changes)
  }
  ngOnDestroy(): void {
    console.log("ondestroy is called")
   }

}
