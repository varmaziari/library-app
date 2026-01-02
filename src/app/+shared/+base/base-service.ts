import { Thing } from "./base-thing";

export class BaseCrudService<T extends Thing> {
    protected data: T[] = [];

    list() {
        return [...this.data];
    }

    add(item: T) {
        this.data.push(item);
    }
    update(item: T) {
        const index = this.data.findIndex(m => m.id == item.id)
        if (index != -1) {
            this.edit(this.data[index], item)
        }
    }
    edit(destination: T, source: T) {

    }
    remove(item: T) {
        this.data = this.data.filter(m => m.id != item.id)
    }
}