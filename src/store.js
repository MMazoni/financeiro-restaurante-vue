import Vue from 'vue';

export const confirmation = Vue.observable({
    dialog: false,
    confirm: false
});

export const dialogConclude = () => {
    confirmation.dialog = false;
    confirmation.confirm = false;
};

export const openDialog = () => {
    confirmation.dialog = true;
};

export const confirm = () => {
    return new Promise(resolve => {
        if (confirmation.confirm)
            resolve(true);
        else {
            resolve(false);
        }
    });
}