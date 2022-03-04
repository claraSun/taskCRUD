export const state = () => ({
    list: [
        {
            "id": 1,
            "name": "test",
            "img": "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
            "info": "測試測試",
            "status": 4
        },
        {
            "id": 2,
            "name": "33",
            "img": null,
            "info": "",
            "status": 2
        },
        {
            "id": 10,
            "name": "test",
            "img": "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
            "info": "測試測試",
            "status": 4
        },
    ]
})

export const mutations = {
    add(state, data) {
        state.list.push(data)
        this.$router.push('/')
    },
    remove(state, { todo }) {
        state.list.splice(state.list.indexOf(todo), 1)
        this.$router.push('/')
    },
    update(state, data){
        for(var i in state.list) {
            var item = state.list[i];
            if ( item.id === data.id){
                // console.log('UPDATE_TODO:', item.content, ' to →', obj.change);
                // 找到 todo 更新 content
                state.list[ i ] = data
                break;
            }
        }
        this.$router.push('/')
    }
}