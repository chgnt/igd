/**************** 
 * Flanker Test *
 ****************/

import { PsychoJS } from './lib/core-2020.2.js';
import * as core from './lib/core-2020.2.js';
import { TrialHandler } from './lib/data-2020.2.js';
import { Scheduler } from './lib/util-2020.2.js';
import * as visual from './lib/visual-2020.2.js';
import * as sound from './lib/sound-2020.2.js';
import * as util from './lib/util-2020.2.js';
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([(- 0.216), (- 0.216), (- 0.216)]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'flanker';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'version': 'session01_pre'};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(training_instructionRoutineBegin());
flowScheduler.add(training_instructionRoutineEachFrame());
flowScheduler.add(training_instructionRoutineEnd());
const training_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(training_trialsLoopBegin, training_trialsLoopScheduler);
flowScheduler.add(training_trialsLoopScheduler);
flowScheduler.add(training_trialsLoopEnd);
flowScheduler.add(exp_instructionRoutineBegin());
flowScheduler.add(exp_instructionRoutineEachFrame());
flowScheduler.add(exp_instructionRoutineEnd());
const exp_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(exp_trialsLoopBegin, exp_trialsLoopScheduler);
flowScheduler.add(exp_trialsLoopScheduler);
flowScheduler.add(exp_trialsLoopEnd);
flowScheduler.add(thanksRoutineBegin());
flowScheduler.add(thanksRoutineEachFrame());
flowScheduler.add(thanksRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.2.4';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var training_instructionClock;
var instrText_train;
var instrFinish_train;
var trialClock;
var msg;
var stimulus;
var resp;
var exp_instructionClock;
var instrText;
var instrFinish;
var thanksClock;
var thanksText;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "training_instruction"
  training_instructionClock = new util.Clock();
  instrText_train = new visual.TextStim({
    win: psychoJS.window,
    name: 'instrText_train',
    text: 'INSTRUKTION TRAINING\n\nGleich werden zentral Pfeile präsentiert, die entweder nach links oder rechts zeigen und von weiteren Elementen flankiert sind.\n\nDie Aufgabe ist es, so schnell und korrekt wie möglich die Richtung mit den Pfeiltasten links oder rechts anzugeben.\n\nBitte eine Taste drücken zum Starten des kurzen Trainings.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  instrFinish_train = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  msg = "";
  
  stimulus = new visual.TextStim({
    win: psychoJS.window,
    name: 'stimulus',
    text: 'default text',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], height: 0.15,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "exp_instruction"
  exp_instructionClock = new util.Clock();
  instrText = new visual.TextStim({
    win: psychoJS.window,
    name: 'instrText',
    text: 'INSTRUKTION EXPERIMENT\n\nJetzt beginnt das Experiment. Dauer ca. 5 bis 7 min.\n\nDie Aufgabe ist dieselbe wie im Training: So schnell und korrekt wie möglich die Richtung des zentralen Elements mit den Pfeiltasten links oder rechts anzugeben.\n\nBitte eine Taste drücken zum Starten des Experiments.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  instrFinish = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  msg = "";
  
  stimulus = new visual.TextStim({
    win: psychoJS.window,
    name: 'stimulus',
    text: 'default text',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], height: 0.15,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "thanks"
  thanksClock = new util.Clock();
  thanksText = new visual.TextStim({
    win: psychoJS.window,
    name: 'thanksText',
    text: 'Super, vielen Dank!',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var _instrFinish_train_allKeys;
var training_instructionComponents;
function training_instructionRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'training_instruction'-------
    t = 0;
    training_instructionClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    instrFinish_train.keys = undefined;
    instrFinish_train.rt = undefined;
    _instrFinish_train_allKeys = [];
    // keep track of which components have finished
    training_instructionComponents = [];
    training_instructionComponents.push(instrText_train);
    training_instructionComponents.push(instrFinish_train);
    
    for (const thisComponent of training_instructionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var continueRoutine;
function training_instructionRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'training_instruction'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = training_instructionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instrText_train* updates
    if (t >= 0.0 && instrText_train.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instrText_train.tStart = t;  // (not accounting for frame time here)
      instrText_train.frameNStart = frameN;  // exact frame index
      
      instrText_train.setAutoDraw(true);
    }

    
    // *instrFinish_train* updates
    if (t >= 0.0 && instrFinish_train.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instrFinish_train.tStart = t;  // (not accounting for frame time here)
      instrFinish_train.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instrFinish_train.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instrFinish_train.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instrFinish_train.clearEvents(); });
    }

    if (instrFinish_train.status === PsychoJS.Status.STARTED) {
      let theseKeys = instrFinish_train.getKeys({keyList: [], waitRelease: false});
      _instrFinish_train_allKeys = _instrFinish_train_allKeys.concat(theseKeys);
      if (_instrFinish_train_allKeys.length > 0) {
        instrFinish_train.keys = _instrFinish_train_allKeys[_instrFinish_train_allKeys.length - 1].name;  // just the last key pressed
        instrFinish_train.rt = _instrFinish_train_allKeys[_instrFinish_train_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of training_instructionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function training_instructionRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'training_instruction'-------
    for (const thisComponent of training_instructionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "training_instruction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var training_trials;
var currentLoop;
function training_trialsLoopBegin(training_trialsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  training_trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'conditions_train.xlsx',
    seed: undefined, name: 'training_trials'
  });
  psychoJS.experiment.addLoop(training_trials); // add the loop to the experiment
  currentLoop = training_trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTraining_trial of training_trials) {
    const snapshot = training_trials.getSnapshot();
    training_trialsLoopScheduler.add(importConditions(snapshot));
    training_trialsLoopScheduler.add(trialRoutineBegin(snapshot));
    training_trialsLoopScheduler.add(trialRoutineEachFrame(snapshot));
    training_trialsLoopScheduler.add(trialRoutineEnd(snapshot));
    training_trialsLoopScheduler.add(endLoopIteration(training_trialsLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function training_trialsLoopEnd() {
  psychoJS.experiment.removeLoop(training_trials);

  return Scheduler.Event.NEXT;
}


var exp_trials;
function exp_trialsLoopBegin(exp_trialsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  exp_trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 15, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'conditions.xlsx',
    seed: 52, name: 'exp_trials'
  });
  psychoJS.experiment.addLoop(exp_trials); // add the loop to the experiment
  currentLoop = exp_trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisExp_trial of exp_trials) {
    const snapshot = exp_trials.getSnapshot();
    exp_trialsLoopScheduler.add(importConditions(snapshot));
    exp_trialsLoopScheduler.add(trialRoutineBegin(snapshot));
    exp_trialsLoopScheduler.add(trialRoutineEachFrame(snapshot));
    exp_trialsLoopScheduler.add(trialRoutineEnd(snapshot));
    exp_trialsLoopScheduler.add(endLoopIteration(exp_trialsLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function exp_trialsLoopEnd() {
  psychoJS.experiment.removeLoop(exp_trials);

  return Scheduler.Event.NEXT;
}


var _resp_allKeys;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    stimulus.setText(stim);
    resp.keys = undefined;
    resp.rt = undefined;
    _resp_allKeys = [];
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(stimulus);
    trialComponents.push(resp);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var frameRemains;
function trialRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'trial'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *stimulus* updates
    if (t >= ISI && stimulus.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stimulus.tStart = t;  // (not accounting for frame time here)
      stimulus.frameNStart = frameN;  // exact frame index
      
      stimulus.setAutoDraw(true);
    }

    frameRemains = ISI + (ISI + 1) - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (stimulus.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stimulus.setAutoDraw(false);
    }
    
    // *resp* updates
    if ((ISI) && resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      resp.tStart = t;  // (not accounting for frame time here)
      resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { resp.clearEvents(); });
    }

    if (resp.status === PsychoJS.Status.STARTED && t >= (resp.tStart + (ISI + 1))) {
      resp.status = PsychoJS.Status.FINISHED;
  }

    if (resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = resp.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _resp_allKeys = _resp_allKeys.concat(theseKeys);
      if (_resp_allKeys.length > 0) {
        resp.keys = _resp_allKeys[_resp_allKeys.length - 1].name;  // just the last key pressed
        resp.rt = _resp_allKeys[_resp_allKeys.length - 1].rt;
        // was this correct?
        if (resp.keys == corrAns) {
            resp.corr = 1;
        } else {
            resp.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'trial'-------
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (resp.keys === undefined) {
      if (['None','none',undefined].includes(corrAns)) {
         resp.corr = 1;  // correct non-response
      } else {
         resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('resp.keys', resp.keys);
    psychoJS.experiment.addData('resp.corr', resp.corr);
    if (typeof resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('resp.rt', resp.rt);
        routineTimer.reset();
        }
    
    resp.stop();
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _instrFinish_allKeys;
var exp_instructionComponents;
function exp_instructionRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'exp_instruction'-------
    t = 0;
    exp_instructionClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    instrFinish.keys = undefined;
    instrFinish.rt = undefined;
    _instrFinish_allKeys = [];
    // keep track of which components have finished
    exp_instructionComponents = [];
    exp_instructionComponents.push(instrText);
    exp_instructionComponents.push(instrFinish);
    
    for (const thisComponent of exp_instructionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function exp_instructionRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'exp_instruction'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = exp_instructionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instrText* updates
    if (t >= 0.0 && instrText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instrText.tStart = t;  // (not accounting for frame time here)
      instrText.frameNStart = frameN;  // exact frame index
      
      instrText.setAutoDraw(true);
    }

    
    // *instrFinish* updates
    if (t >= 0.0 && instrFinish.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instrFinish.tStart = t;  // (not accounting for frame time here)
      instrFinish.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instrFinish.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instrFinish.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instrFinish.clearEvents(); });
    }

    if (instrFinish.status === PsychoJS.Status.STARTED) {
      let theseKeys = instrFinish.getKeys({keyList: [], waitRelease: false});
      _instrFinish_allKeys = _instrFinish_allKeys.concat(theseKeys);
      if (_instrFinish_allKeys.length > 0) {
        instrFinish.keys = _instrFinish_allKeys[_instrFinish_allKeys.length - 1].name;  // just the last key pressed
        instrFinish.rt = _instrFinish_allKeys[_instrFinish_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of exp_instructionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function exp_instructionRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'exp_instruction'-------
    for (const thisComponent of exp_instructionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "exp_instruction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var thanksComponents;
function thanksRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'thanks'-------
    t = 0;
    thanksClock.reset(); // clock
    frameN = -1;
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    thanksComponents = [];
    thanksComponents.push(thanksText);
    
    for (const thisComponent of thanksComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function thanksRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'thanks'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = thanksClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *thanksText* updates
    if (t >= 0.0 && thanksText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      thanksText.tStart = t;  // (not accounting for frame time here)
      thanksText.frameNStart = frameN;  // exact frame index
      
      thanksText.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (thanksText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      thanksText.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of thanksComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function thanksRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'thanks'-------
    for (const thisComponent of thanksComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
