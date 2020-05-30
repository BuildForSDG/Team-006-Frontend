import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingResponseComponent } from './pending-response.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { RouterTestingModule } from '@angular/router/testing';

const authState = {
  isAnonymous: true,
  uid: '17WvU2Vj58SnTz8v7EqyYYb0WRc2'
};

const mockAngularFireAuth: any = {
  auth: jasmine.createSpyObj('auth', {
    signInAnonymously: Promise.resolve() /* reject({
      code: 'auth/operation-not-allowed'
    }) */
      .catch((error) => error),
    signInWithPopup: Promise.resolve().catch((error) => error),
    signOut: Promise.resolve().catch((error) => error)
  }),
  authState: of(authState)
};

describe('PendingResponseComponent', () => {
  let component: PendingResponseComponent;
  let fixture: ComponentFixture<PendingResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PendingResponseComponent],
      imports: [SharedModule, RouterTestingModule],
      providers: [{ provide: AngularFireAuth, useValue: mockAngularFireAuth }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of first aid tips after the view initializes', () => {
    component.ngAfterViewInit();

    expect(component.firstAidTips.toArray().length).toBeTruthy();
  });

  it('should set the display style of all the lists of first aid tips to none after the view initializes', () => {
    component.ngAfterViewInit();

    component.firstAidTips.forEach((li) => {
      li.nativeElement.style.display = 'none';
    });

    component.firstAidTips.toArray().forEach((li) => {
      expect(li.nativeElement.style.display).toEqual('none');
    });
  });

  it('should set the display style of the first item of the first aid tips queryList to flex', () => {
    component.ngAfterViewInit();

    expect(component.firstAidTips.toArray()[0].nativeElement.style.display).toEqual('flex');
  });

  it('should switch the display style of items in the first aid tips queryList from none to flex to none', () => {
    component.ngAfterViewInit();
    let counter = 0;

    jasmine.clock().install();
    jasmine.clock().tick(7000);

    if (counter > component.firstAidTips.length - 1) {
      counter = 0;
      expect(component.firstAidTips.toArray()[component.firstAidTips.length - 1].nativeElement.style.display).toEqual(
        'none'
      );
    }

    if (counter) {
      expect(component.firstAidTips.toArray()[counter - 1].nativeElement.style.display).toEqual('none');
    }

    expect(component.firstAidTips.toArray()[counter].nativeElement.style.display).toEqual('flex');
    counter++;

    jasmine.clock().uninstall();
  });
});
