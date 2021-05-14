export default (props) => {
  return {
    props: {
      // 查询表格接口
      serve: {
        type: [Function],
        required: true
      },
      /**
     * 分页信息
     */
      pagination: {
        type: Object,
        default: () => ({})
      },
      pagePosition: {
        type: String,
        default: 'right',
        validator(value) {
          return ['right', 'left', 'center'].includes(value)
        }
      },
      showLoading: {
        type: Boolean,
        default: true
      },
      columns: {
        type: Array,
        default: () => []
      },
      /**
       * 返回底层table 的引用
       */
      wrappedTableRef: {
        type: Function
      }

    },
    render(h) {
      return {

      }
    }
  }
}