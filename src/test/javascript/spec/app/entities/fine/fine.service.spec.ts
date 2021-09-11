/* tslint:disable max-line-length */
import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { take, map } from 'rxjs/operators';
import * as moment from 'moment';
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { FineService } from 'app/entities/fine/fine.service';
import { IFine, Fine, PaymentStatus } from 'app/shared/model/fine.model';

describe('Service Tests', () => {
    describe('Fine Service', () => {
        let injector: TestBed;
        let service: FineService;
        let httpMock: HttpTestingController;
        let elemDefault: IFine;
        let currentDate: moment.Moment;
        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [HttpClientTestingModule]
            });
            injector = getTestBed();
            service = injector.get(FineService);
            httpMock = injector.get(HttpTestingController);
            currentDate = moment();

            elemDefault = new Fine(0, 0, currentDate, 0, PaymentStatus.PAID, 0, 'AAAAAAA', currentDate, 'AAAAAAA');
        });

        describe('Service methods', async () => {
            it('should find an element', async () => {
                const returnedFromService = Object.assign(
                    {
                        fineDate: currentDate.format(DATE_FORMAT),
                        modifiedDate: currentDate.format(DATE_FORMAT)
                    },
                    elemDefault
                );
                service
                    .find(123)
                    .pipe(take(1))
                    .subscribe(resp => expect(resp).toMatchObject({ body: elemDefault }));

                const req = httpMock.expectOne({ method: 'GET' });
                req.flush(JSON.stringify(returnedFromService));
            });

            it('should create a Fine', async () => {
                const returnedFromService = Object.assign(
                    {
                        id: 0,
                        fineDate: currentDate.format(DATE_FORMAT),
                        modifiedDate: currentDate.format(DATE_FORMAT)
                    },
                    elemDefault
                );
                const expected = Object.assign(
                    {
                        fineDate: currentDate,
                        modifiedDate: currentDate
                    },
                    returnedFromService
                );
                service
                    .create(new Fine(null))
                    .pipe(take(1))
                    .subscribe(resp => expect(resp).toMatchObject({ body: expected }));
                const req = httpMock.expectOne({ method: 'POST' });
                req.flush(JSON.stringify(returnedFromService));
            });

            it('should update a Fine', async () => {
                const returnedFromService = Object.assign(
                    {
                        amount: 1,
                        fineDate: currentDate.format(DATE_FORMAT),
                        monthlyPayable: 1,
                        paymentStatus: 'BBBBBB',
                        left: 1,
                        modifiedBy: 'BBBBBB',
                        modifiedDate: currentDate.format(DATE_FORMAT),
                        reason: 'BBBBBB'
                    },
                    elemDefault
                );

                const expected = Object.assign(
                    {
                        fineDate: currentDate,
                        modifiedDate: currentDate
                    },
                    returnedFromService
                );
                service
                    .update(expected)
                    .pipe(take(1))
                    .subscribe(resp => expect(resp).toMatchObject({ body: expected }));
                const req = httpMock.expectOne({ method: 'PUT' });
                req.flush(JSON.stringify(returnedFromService));
            });

            it('should return a list of Fine', async () => {
                const returnedFromService = Object.assign(
                    {
                        amount: 1,
                        fineDate: currentDate.format(DATE_FORMAT),
                        monthlyPayable: 1,
                        paymentStatus: 'BBBBBB',
                        left: 1,
                        modifiedBy: 'BBBBBB',
                        modifiedDate: currentDate.format(DATE_FORMAT),
                        reason: 'BBBBBB'
                    },
                    elemDefault
                );
                const expected = Object.assign(
                    {
                        fineDate: currentDate,
                        modifiedDate: currentDate
                    },
                    returnedFromService
                );
                service
                    .query(expected)
                    .pipe(
                        take(1),
                        map(resp => resp.body)
                    )
                    .subscribe(body => expect(body).toContainEqual(expected));
                const req = httpMock.expectOne({ method: 'GET' });
                req.flush(JSON.stringify([returnedFromService]));
                httpMock.verify();
            });

            it('should delete a Fine', async () => {
                const rxPromise = service.delete(123).subscribe(resp => expect(resp.ok));

                const req = httpMock.expectOne({ method: 'DELETE' });
                req.flush({ status: 200 });
            });
        });

        afterEach(() => {
            httpMock.verify();
        });
    });
});
