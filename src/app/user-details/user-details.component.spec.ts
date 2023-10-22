// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { ActivatedRoute, Router } from '@angular/router';
// import { UserDetailsComponent } from './user-details.component';
// import { UserStoreService } from '../user-store.service';
// import { of } from 'rxjs';

// describe('UserDetailsComponent', () => {
//   let component: UserDetailsComponent;
//   let fixture: ComponentFixture<UserDetailsComponent>;
//   let route: ActivatedRoute;
//   let userStoreService: UserStoreService;
//   const mockUserStoreService = {
//     getAllUsers: () => [
//       { login: { uuid: 'user1' } },
//       { login: { uuid: 'user2' } },
//     ],
//   };
//   const mockActivatedRoute = {
//     params: of({ userId: 'user1' }), // Replace 'user1' with the user ID you want to test
//   };

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [UserDetailsComponent],
//       providers: [
//         { provide: ActivatedRoute, useValue: mockActivatedRoute },
//         { provide: UserStoreService, useValue: mockUserStoreService },
//       ],
//     }).compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(UserDetailsComponent);
//     component = fixture.componentInstance;
//     route = TestBed.inject(ActivatedRoute);
//     userStoreService = TestBed.inject(UserStoreService);
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should set userId from ActivatedRoute', () => {
//     expect(component.userId).toEqual('user1'); // Replace 'user1' with the user ID you provided
//   });

//   it('should set specificUser based on userId', () => {
//     expect(component.specificUser).toEqual(mockUserStoreService.getAllUsers()[0]);
//   });
// });
