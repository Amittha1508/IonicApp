import { createStore } from 'vuex';

const store = createStore({
  state() {
    let storedMemories = [];
    try {
      storedMemories = JSON.parse(localStorage.getItem('memories')) || [];
    } catch (e) {
      storedMemories = [];
    }
    
    return {
      memories: storedMemories.length ? storedMemories : [
       {
          id: "m1",
          image: "https://www.charnveeresortkhaoyai.com/wp-content/uploads/2023/12/Rancho-Dec-1-%E0%B8%97%E0%B8%B0%E0%B9%80%E0%B8%A5%E0%B8%97%E0%B8%B5%E0%B9%88-%E0%B8%AA%E0%B8%A7%E0%B8%A2%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%AA%E0%B8%B8%E0%B8%94%E0%B9%83%E0%B8%99%E0%B9%84%E0%B8%97%E0%B8%A2-06-1024x683.jpg.webp"
        ,
          title: "การท่องเที่ยว",  
          description: "การท่องเที่ยวในภาคใต้"
        },
        {
          id: "m2",
          image: "./public/img/volleyball.jpg"
       ,
          title: "การออกกำลังกาย",  
          description: "เล่นวอลเลย์บอล"
        },
       {
          id: "m3",
          image: "https://www.naturebiotec.com/wp-content/uploads/2021/05/cute-little-girl-is-sleeping-white-bed-1536x1024.jpg"
        ,
          title: "การนอนหลับ",  
          description: "นอนไม่เกิน 5 ทุ่ม"
        },
        {
          id: "m4",
          image: "https://www.apthai.com/images/production/Ahsto9PzvbRWJJUBdAEZSeuWM4KMyG-metaQVAtSlVMMTktZGVza3RvcC5qcGcuanBn-.jpg"
        ,
          title: "การใช้จ่ายเงิน",  
          description: "เก็บออมเดือนละ 1,500",
        }
      ] 
    } 
  },
  mutations: {
    addMemory(state, memoryData) {
      const newMemory = {
        id: new Date().toISOString(),
        title: memoryData.title,
        image: memoryData.imageUrl,
        description: memoryData.description,
      };
      state.memories.unshift(newMemory);
      localStorage.setItem('memories', JSON.stringify(state.memories));
    },
  
  clearMemories(state) {
    state.memories = [];
    localStorage.removeItem('memories'); 
  }
},
  actions: {
    addMemory({commit}, memoryData) {
      commit("addMemory", memoryData);
    },
  clearMemories({ commit }) {
      commit("clearMemories");
    }
  },
  getters: {
    memories:(state) => state.memories,
    memoryById: (state) => (id) => state.memories.find(m => m.id === id),
  },

});

export default store;