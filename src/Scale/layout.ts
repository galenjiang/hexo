interface IOriginal {
  width: number
  height: number
}

interface IOutput {
  width: number
  height: number
}

type ILayout = 'stretch' | 'cover' | 'contain'

interface IRect {
  x: number
  y: number
  width?: number
  height?: number
}

export default class LayoutScale {

  private original: { width: number; height: number }
  private output: { width: number; height: number }
  private canvasLayout: ILayout
  private spriteLayout: ILayout

  constructor() {
    this.original = {
      width: 1,
      height: 1,
    }

    this.output = {
      width: 1,
      height: 1,
    }

    this.canvasLayout = 'stretch'
    this.spriteLayout = 'contain'

  }

  setOriginal(original: IOriginal) {
    this.original = original
  }

  setOutput(output: IOutput) {
    this.output = output
  }

  setCanvasLayout(type: ILayout) {
    this.canvasLayout = type
  }

  setSpiritLayout(type: ILayout) {
    this.spriteLayout = type
  }

  getPosition(x: number, y: number, type = 'stretch') {
    const output = {
      x: 0,
      y: 0,
    }
    const lsWidth = linearScale()
    const lsHeight = linearScale()

    const domainRadio = this.original.width / this.original.height
    const rangeRadio = this.output.width / this.output.height

    if (type === 'stretch') {
      lsWidth.domain([0, this.original.width])
      lsWidth.range([0, this.output.width])

      lsHeight.domain([0, this.original.height])
      lsHeight.range([0, this.output.height])

    } else if (type === 'cover') {
      if (domainRadio >= rangeRadio) {
        const outputWidth = rangeRadio * this.original.width
        const margin = (this.original.width - outputWidth) / 2
        lsWidth.domain([margin, this.original.width - margin])
        lsWidth.range([0, this.output.width])


        lsHeight.domain([0, this.original.height])
        lsHeight.range([0, this.output.height])

      } else {
        lsWidth.domain([0, this.original.width])
        lsWidth.range([0, this.output.width])

        const outputHeight = this.original.height / rangeRadio
        const margin = (this.original.height - outputHeight) / 2
        lsHeight.domain([margin, this.original.height - margin])
        lsHeight.range([0, this.output.height])
      }


    } else if (type === 'contain') {
      if (domainRadio >= rangeRadio) {

        lsWidth.domain([0, this.original.width])
        lsWidth.range([0, this.output.width])


        const outputHeight = this.original.width / rangeRadio
        const margin = (outputHeight - this.original.height) / 2

        lsHeight.domain([-margin, this.original.height + margin])
        lsHeight.range([0, this.output.height])
      } else {

        const outputWidth = rangeRadio * this.original.height
        const margin = (outputWidth - this.original.width) / 2

        lsWidth.domain([-margin, this.original.width + margin])
        lsWidth.range([0, this.output.width])

        lsHeight.domain([0, this.original.height])
        lsHeight.range([0, this.output.height])

      }
    }

    output.x = lsWidth(x)
    output.y = lsHeight(y)


    return output

  }

  getCanvasRect({ x: originalX, y: originalY, width: originalWidth, height: originalHeight }: IRect) {
    const type = this.canvasLayout
    const { x, y } = this.getPosition(originalX, originalY, type)
    const { x: x1, y: y1 } = this.getPosition(originalX + originalWidth, originalY + originalHeight, type)
    return {
      x, y,
      width: x1 - x,
      height: y1 - y,
    }
  }

  getSpiritRect({ x: originalX, y: originalY, width: originalWidth = 0, height: originalHeight = 0 }: IRect) {
    const type = this.spriteLayout
    const { x, y } = this.getPosition(originalX, originalY, this.canvasLayout)
    const { x: x1, y: y1 } = this.getPosition(originalX + originalWidth, originalY + originalHeight, type)
    return {
      x, y,
      width: x1 - x,
      height: y1 - y,
    }
  }

}
