/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { SoptorshiTestModule } from '../../../test.module';
import { FineUpdateComponent } from 'app/entities/fine/fine-update.component';
import { FineService } from 'app/entities/fine/fine.service';
import { Fine } from 'app/shared/model/fine.model';

describe('Component Tests', () => {
    describe('Fine Management Update Component', () => {
        let comp: FineUpdateComponent;
        let fixture: ComponentFixture<FineUpdateComponent>;
        let service: FineService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [SoptorshiTestModule],
                declarations: [FineUpdateComponent]
            })
                .overrideTemplate(FineUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(FineUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(FineService);
        });

        describe('save', () => {
            it('Should call update service on save for existing entity', fakeAsync(() => {
                // GIVEN
                const entity = new Fine(123);
                spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                comp.fine = entity;
                // WHEN
                comp.save();
                tick(); // simulate async

                // THEN
                expect(service.update).toHaveBeenCalledWith(entity);
                expect(comp.isSaving).toEqual(false);
            }));

            it('Should call create service on save for new entity', fakeAsync(() => {
                // GIVEN
                const entity = new Fine();
                spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                comp.fine = entity;
                // WHEN
                comp.save();
                tick(); // simulate async

                // THEN
                expect(service.create).toHaveBeenCalledWith(entity);
                expect(comp.isSaving).toEqual(false);
            }));
        });
    });
});