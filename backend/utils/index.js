module.exports = {
    sortByName: function (users) {
        return users.sort((u1, u2) => {
            return u1.name > u2.name ? 1 : u1.name < u2.name ? -1 : 0;
        });
    }
}