# Progress Donut plugin

## Initializing the progress donut
````
const progressInstance = progressDonut('#progressWrapper').init(options);
````

## Setting value of the progress donut
````
progressInstance.setValue(39);
````

## Setting state of the progress donut
````
progressInstance.updateState({
  visibility: 'normal', // or 'hidden'
  animated: true
});
````
Use updateState with no arguments for element state synchronizing

## Taking actual progress donut state
````
progressInstance.getState();
````

## Setting options of the progress donut
````
progressInstance.setOptions({
  progressDonutClasses: ['custom-donut'], //add custom class to progress donut root
  progressDonutTrackClasses: ['custom-donut__track'] , //add custom class to progress donut track
  progressDonutFillClasses: ['custom-donut__fill'] , //add custom class to progress donut fill
  animationLoopDuration: 3000 //configure speed of the progress donut animation (loop duration in ms)
});
````

## Destroying the progress donut
````
progressInstance.destroy();
````
