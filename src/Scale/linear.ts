interface IScaleInstance {
  (s: number): number
  domain: (range: number[]) => void
  range: (range: number[]) => void

}

export default function linearScale() {
  let domain = [0, 1]
  let range = [0, 1]


  const scaleInstance: IScaleInstance = <IScaleInstance>function(s: number) {
    const t = (s - domain[0]) / (domain[1] - domain[0])

    return range[0] + t * (range[1] - range[0])
  }

  scaleInstance.domain = (newOriginal: number[]) => {
    domain = newOriginal
  }

  scaleInstance.range = (newOutput: number[]) => {
    range = newOutput
  }

  return scaleInstance
}
