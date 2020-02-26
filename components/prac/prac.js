// components/prac/prac.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list : {
      type: Array,
      value : []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex : 0,
    message : "",
    count : 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleValue (e){
      console.log(e);
      const index =  e.currentTarget.dataset.index;
      
      this.setData({
        currentIndex : index
      })
      const item = e.currentTarget.dataset.item;
      this.triggerEvent("handleValue",{item},{})
    },
    controllerHits(num){
      this.setData({
        count : this.data.count +num
      })
    }
  }
})
