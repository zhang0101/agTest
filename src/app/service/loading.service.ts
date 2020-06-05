import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {ServiceModule} from '@service/service.module';

@Injectable({
    providedIn: ServiceModule
})
export class LoadingService {

    private loadingSubject = new Subject<boolean>();
    count = 0;

    constructor() {

    }

    getLoading(): Observable<boolean> {
        return this.loadingSubject.asObservable();
    }

    loading(showLoading: boolean) {
        this.loadingSubject.next(showLoading);
    }
}
