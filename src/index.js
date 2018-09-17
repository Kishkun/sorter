class Sorter {
    constructor() {
        this.array = [];
        this.meaning = false;
        Sorter.prototype.sortArray = function (left, right) {
            return 0;
        };
    }

    add(element) {
        this.array.push(element);
    }

    at(index) {
        return this.array[index];
    }

    get length() {
        return this.array.length;
    }

    toArray() {
        return this.array
    }

    sort(indices) {
        if (this.meaning) {

            indices = indices.sort();

            const left = indices[0];

            const right = indices[1];

            if (this.sortArray(this.array[left], this.array[right]) > 0) {

                const a = this.array[left];

                this.array[left] = this.array[right];

                this.array[right] = a;

            }

        } else {

            if (Array.isArray(indices)) {

                indices = indices.sort();

                for (let i = 0, endI = indices.length - 1; i < endI; i++) {

                    for (let j = 0, endJ = endI - i; j < endJ; j++) {

                        if (this.array[indices[j]] > this.array[indices[j + 1]]) {

                            let b = this.array[indices[j]];

                            this.array[indices[j]] = this.array[indices[j + 1]];

                            this.array[indices[j + 1]] = b;

                        }

                    }

                }

            }

        }
    }

    setComparator(func1, arg) {

        Sorter.prototype.sortArray = func1;

        this.meaning = true;
    }
}

module.exports = Sorter;
