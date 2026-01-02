import { BaseCrudService } from "./base-service";
import { Thing } from "./base-thing";

export class BaseCrudPage<T extends Thing> {
    dataService!: BaseCrudService<T>;
    data: T[] = []
    state: string = 'list';
    item!: T;
    // {
    //     id: 0,
    //     title: '',
    //     writer: '',
    //     publisher: '',
    //     price: 0
    // };
    save() {
        if (this.state == 'add') {
            this.dataService.add(this.item);
        }
        else if (this.state == 'edit') {
            this.dataService.update(this.item);
        }
        else if (this.state == 'remove') {
            this.dataService.remove(this.item);
        }
        this.refreshData();
        this.state = 'list'
    }
    refreshData() {
        this.data = this.dataService.list();
    }
    cancel() {
        this.state = 'list'
    }
    add() {
        this.addPrepair();
        this.state='add';
    }
    addPrepair() {

    }
    edit(i: T) {
        this.item = { ...i };
        this.state = 'edit';
    }
    remove(i: T) {
        this.item = { ...i };
        this.state = 'remove';
    }
}