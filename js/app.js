new Vue({
  el: '#app',
  data: {
    stage: 'start',
    currentIdx: 0,
    userName: '',
    questions,
    personalityList,
    result: null,
  },
  computed: {
    currentQuestion() {
      return this.questions[this.currentIdx]
    },
    selectedList() {
      return this.questions.map(item => item.options.find(opt => opt.selected)).filter(opt => opt)
    },
    progress() {
      return ((this.currentIdx + 1) / questions.length) * 100
    },
    circumference() {
      return 2 * Math.PI * 50; // 半径为50的圆的周长
    },
    dashOffset() {
      const percentage = this.matchPercentage / 100;
      return this.circumference * (1 - percentage);
    },
    matchPercentage() {
      if (!this.result || !this.result.score) return 0;
      // 计算匹配度百分比，这里假设分数范围在0-100之间
      // 实际应用中可能需要根据具体的分数范围进行调整
      return Math.min(Math.round(this.result.score* 2), 100);
    }
  },
  methods: {
    start() {
      this.stage = 'quiz'
      this.currentIdx = 0
      this.result = null
    },
    async choose(option, index) {
      // ========== 分数累加 ==========
      console.log('选中', option)
      option.options.forEach(item => {
        item.selected = false
      })
      option.options[index].selected = true

      await new Promise(resolve => setTimeout(resolve, 200))
      
      if(this.currentIdx !== questions.length - 1){
        this.currentIdx++
      }
    },
    // 结果算法
    calcResult() {
      if(this.selectedList.length !== 15) {
        alert('您还有' + (15 - this.selectedList.length) + '个选项未选择')
        console.log(this.selectedList.length);
        return
      }
      // ========== 匹配算法 ==========
      console.log(this.selectedList.length);
      this.personalityList.forEach(person => {
        this.selectedList.forEach(opt => {
          if(!opt) return // 未选择选项则跳过不返回值（而非返回null） // 其实加了上面的判断也没必要（
          let score = 0.0
          score += opt.scores.brave * person.weight[0]
          score += opt.scores.strong * person.weight[1]
          score += opt.scores.sharp * person.weight[2]
          score += opt.scores.easy * person.weight[3]
          person.score += score
        })
      })
      this.result = this.personalityList.reduce((prev, cur) => {
        return prev.score > cur.score ? prev : cur
      }, this.personalityList[0])
      this.stage = 'result'
    },
    nextQuestion() {
      this.currentIdx++
    },
    prevQuestion() {
      this.currentIdx--
    },
    restart() {
      this.stage = 'start'
      this.questions.forEach(item => {
        item.options.forEach(opt => {
          opt.selected = false
        })
      })
      this.personalityList.forEach(person => {
        person.score = 0
      })
      this.result = null
    }
  }
})