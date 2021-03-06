import { HttpClientModule } from '@angular/common/http';
import { TestBed, inject } from '@angular/core/testing';

import { NoteService } from './note.service';
import { Note } from './note';
import { environment } from '../../environments/environment.prod';

describe('NoteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        NoteService,
        { provide: 'apiUrl', useValue: environment.url }
      ]
    });
  });

  it('should be created', inject([NoteService], (service: NoteService) => {
    expect(service).toBeTruthy();
  }));

  it('should create a note', inject([NoteService], (service: NoteService) => {
    const token = 'jimmy';
    const note = {
      NoteColor: 'red'
    } as Note;
    service.create(note, token)
      .subscribe();
    service.getAll(token)
      .subscribe(result => expect(result[0]).toBe(note));
  }));
});
