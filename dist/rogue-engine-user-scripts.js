(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rogue-engine"), require("three"));
	else if(typeof define === 'function' && define.amd)
		define(["rogue-engine", "three"], factory);
	else if(typeof exports === 'object')
		exports["rogue-engine-user-scripts"] = factory(require("rogue-engine"), require("three"));
	else
		root["rogue-engine-user-scripts"] = factory(root["rogue-engine"], root["three"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE_rogue_engine__, __WEBPACK_EXTERNAL_MODULE_three__) {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@dimforge/rapier3d-compat/rapier.es.js":
/*!*************************************************************!*\
  !*** ./node_modules/@dimforge/rapier3d-compat/rapier.es.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActiveCollisionTypes": () => (/* binding */ YA),
/* harmony export */   "ActiveEvents": () => (/* binding */ RA),
/* harmony export */   "ActiveHooks": () => (/* binding */ sA),
/* harmony export */   "Ball": () => (/* binding */ kI),
/* harmony export */   "BroadPhase": () => (/* binding */ AI),
/* harmony export */   "CCDSolver": () => (/* binding */ _A),
/* harmony export */   "Capsule": () => (/* binding */ UI),
/* harmony export */   "CharacterCollision": () => (/* binding */ dI),
/* harmony export */   "CoefficientCombineRule": () => (/* binding */ yA),
/* harmony export */   "Collider": () => (/* binding */ WI),
/* harmony export */   "ColliderDesc": () => (/* binding */ xI),
/* harmony export */   "ColliderSet": () => (/* binding */ mI),
/* harmony export */   "Cone": () => (/* binding */ HI),
/* harmony export */   "ConvexPolyhedron": () => (/* binding */ qI),
/* harmony export */   "Cuboid": () => (/* binding */ hI),
/* harmony export */   "Cylinder": () => (/* binding */ cI),
/* harmony export */   "DebugRenderBuffers": () => (/* binding */ eI),
/* harmony export */   "DebugRenderPipeline": () => (/* binding */ rI),
/* harmony export */   "DynamicRayCastVehicleController": () => (/* binding */ nI),
/* harmony export */   "EventQueue": () => (/* binding */ bI),
/* harmony export */   "FeatureType": () => (/* binding */ MA),
/* harmony export */   "FixedImpulseJoint": () => (/* binding */ TA),
/* harmony export */   "FixedMultibodyJoint": () => (/* binding */ VA),
/* harmony export */   "GenericImpulseJoint": () => (/* binding */ WA),
/* harmony export */   "HalfSpace": () => (/* binding */ aI),
/* harmony export */   "Heightfield": () => (/* binding */ sI),
/* harmony export */   "ImpulseJoint": () => (/* binding */ rA),
/* harmony export */   "ImpulseJointSet": () => (/* binding */ jA),
/* harmony export */   "IntegrationParameters": () => (/* binding */ eA),
/* harmony export */   "IslandManager": () => (/* binding */ $A),
/* harmony export */   "JointAxesMask": () => (/* binding */ NA),
/* harmony export */   "JointData": () => (/* binding */ mA),
/* harmony export */   "JointType": () => (/* binding */ UA),
/* harmony export */   "KinematicCharacterController": () => (/* binding */ TI),
/* harmony export */   "MassPropsMode": () => (/* binding */ HA),
/* harmony export */   "MotorModel": () => (/* binding */ JA),
/* harmony export */   "MultibodyJoint": () => (/* binding */ fA),
/* harmony export */   "MultibodyJointSet": () => (/* binding */ vA),
/* harmony export */   "NarrowPhase": () => (/* binding */ II),
/* harmony export */   "PhysicsPipeline": () => (/* binding */ LI),
/* harmony export */   "PointColliderProjection": () => (/* binding */ QI),
/* harmony export */   "PointProjection": () => (/* binding */ BI),
/* harmony export */   "Polyline": () => (/* binding */ MI),
/* harmony export */   "PrismaticImpulseJoint": () => (/* binding */ ZA),
/* harmony export */   "PrismaticMultibodyJoint": () => (/* binding */ PA),
/* harmony export */   "Quaternion": () => (/* binding */ SA),
/* harmony export */   "QueryFilterFlags": () => (/* binding */ qA),
/* harmony export */   "QueryPipeline": () => (/* binding */ tI),
/* harmony export */   "Ray": () => (/* binding */ EI),
/* harmony export */   "RayColliderIntersection": () => (/* binding */ DI),
/* harmony export */   "RayColliderToi": () => (/* binding */ oI),
/* harmony export */   "RayIntersection": () => (/* binding */ iI),
/* harmony export */   "RevoluteImpulseJoint": () => (/* binding */ bA),
/* harmony export */   "RevoluteMultibodyJoint": () => (/* binding */ uA),
/* harmony export */   "RigidBody": () => (/* binding */ lA),
/* harmony export */   "RigidBodyDesc": () => (/* binding */ LA),
/* harmony export */   "RigidBodySet": () => (/* binding */ pA),
/* harmony export */   "RigidBodyType": () => (/* binding */ KA),
/* harmony export */   "RopeImpulseJoint": () => (/* binding */ nA),
/* harmony export */   "RotationOps": () => (/* binding */ kA),
/* harmony export */   "RoundCone": () => (/* binding */ lI),
/* harmony export */   "RoundConvexPolyhedron": () => (/* binding */ RI),
/* harmony export */   "RoundCuboid": () => (/* binding */ KI),
/* harmony export */   "RoundCylinder": () => (/* binding */ YI),
/* harmony export */   "RoundTriangle": () => (/* binding */ yI),
/* harmony export */   "SdpMatrix3": () => (/* binding */ aA),
/* harmony export */   "SdpMatrix3Ops": () => (/* binding */ hA),
/* harmony export */   "Segment": () => (/* binding */ JI),
/* harmony export */   "SerializationPipeline": () => (/* binding */ pI),
/* harmony export */   "Shape": () => (/* binding */ SI),
/* harmony export */   "ShapeColliderTOI": () => (/* binding */ wI),
/* harmony export */   "ShapeContact": () => (/* binding */ CI),
/* harmony export */   "ShapeTOI": () => (/* binding */ GI),
/* harmony export */   "ShapeType": () => (/* binding */ FA),
/* harmony export */   "SolverFlags": () => (/* binding */ cA),
/* harmony export */   "SphericalImpulseJoint": () => (/* binding */ xA),
/* harmony export */   "SphericalMultibodyJoint": () => (/* binding */ zA),
/* harmony export */   "SpringImpulseJoint": () => (/* binding */ OA),
/* harmony export */   "TempContactForceEvent": () => (/* binding */ ZI),
/* harmony export */   "TempContactManifold": () => (/* binding */ gI),
/* harmony export */   "TriMesh": () => (/* binding */ FI),
/* harmony export */   "Triangle": () => (/* binding */ NI),
/* harmony export */   "UnitImpulseJoint": () => (/* binding */ dA),
/* harmony export */   "UnitMultibodyJoint": () => (/* binding */ XA),
/* harmony export */   "Vector3": () => (/* binding */ GA),
/* harmony export */   "VectorOps": () => (/* binding */ wA),
/* harmony export */   "World": () => (/* binding */ OI),
/* harmony export */   "default": () => (/* binding */ gg),
/* harmony export */   "init": () => (/* binding */ Ag),
/* harmony export */   "version": () => (/* binding */ Ig)
/* harmony export */ });
//# sourceMappingURL=rapier.es.js.map


/***/ }),

/***/ "./Assets/rogue_packages/RogueEngine/rogue-animator/RogueAnimator.re.ts":
/*!******************************************************************************!*\
  !*** ./Assets/rogue_packages/RogueEngine/rogue-animator/RogueAnimator.re.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RogueAnimator)
/* harmony export */ });
/* harmony import */ var rogue_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rogue-engine */ "rogue-engine");
/* harmony import */ var rogue_engine__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rogue_engine__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_1__);
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};


const v0 = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3();
let RogueAnimator = class extends rogue_engine__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments);
    this.clips = {};
    this.actions = {};
    this._selected = 0;
    this.selectedOptions = Object.keys(this.clips);
    this.playLabel = "Play";
    this.stopped = false;
    this.stopping = false;
    this.animationFinishedListeners = [];
    this.animationFinished = /* @__PURE__ */ __name(() => {
      if (this.stopping) {
        this.stopped = true;
        this.stopping = false;
      }
      this.animationFinishedListeners.forEach((listener) => listener());
      if (this.activeAction.loop === three__WEBPACK_IMPORTED_MODULE_1__.LoopOnce && !this.activeAction.clampWhenFinished) {
        this.mix(Object.keys(this.actions)[0], 0.1, 1, false);
      }
    }, "animationFinished");
  }
  get animations() {
    return this.isReady ? Object.values(this.clips) : [];
  }
  get selected() {
    this.selectedOptions = Object.keys(this.clips);
    this.isReady && this.animationsHaveChanged() && this.updateConfigs();
    return this._selected;
  }
  set selected(value) {
    this._selected = value;
    this.activeAction && this.activeAction.reset();
    this.animationsHaveChanged() && this.updateConfigs();
    if (this.playLabel === "Stop" && !rogue_engine__WEBPACK_IMPORTED_MODULE_0__.Runtime.isRunning) {
      this.playAction();
    }
  }
  get selectedAction() {
    const actionName = this.selectedOptions[this.selected];
    return this.actions[actionName];
  }
  stopAction() {
    this.selectedAction?.reset();
    this.mixer.stopAllAction();
  }
  playAction() {
    this.stopAction();
    this.playLabel = "Stop";
    if (!this.selectedAction)
      return;
    this.selectedAction.play();
  }
  play() {
    if (rogue_engine__WEBPACK_IMPORTED_MODULE_0__.Runtime.isRunning)
      return;
    if (this.playLabel === "Play" && !this.editorUpdate) {
      this.mixer;
      this.animationsHaveChanged() && this.updateConfigs();
      this.playAction();
      const rootBone = this.getRootBone();
      const originalPos = rootBone?.position.clone();
      this.editorUpdate = rogue_engine__WEBPACK_IMPORTED_MODULE_0__.onUpdate((sceneController) => {
        if (sceneController === rogue_engine__WEBPACK_IMPORTED_MODULE_0__.Runtime)
          return;
        if (this.animationsHaveChanged()) {
          this.stopAction();
          this.updateConfigs();
        }
        this.mixer.update(sceneController.deltaTime);
        originalPos && rootBone?.position.copy(originalPos);
      });
    } else {
      this.playLabel = "Play";
      this.stopAction();
      this.editorUpdate?.stop();
      this.editorUpdate = void 0;
    }
  }
  get isActive() {
    return !this.stopped && !this.stopping;
  }
  stop() {
    this.stopping = true;
  }
  resume() {
    this.stopped = false;
    this.stopping = false;
  }
  get mixer() {
    if (!this._mixer) {
      this._mixer = new three__WEBPACK_IMPORTED_MODULE_1__.AnimationMixer(this.object3d);
      this.actions = {};
      for (let key in this.clips) {
        let clip = this.clips[key];
        this.actions[key] = clip ? new three__WEBPACK_IMPORTED_MODULE_1__.AnimationAction(this._mixer, clip) : void 0;
      }
    }
    return this._mixer;
  }
  animationsHaveChanged() {
    if (this.selectedOptions.length !== this.animations.length)
      return true;
    const keys = Object.keys(this.clips);
    for (let i = 0; i < this.selectedOptions.length; i++) {
      if (this.selectedOptions[i] !== keys[i])
        return true;
      if (this.actions[keys[i]]) {
        if (this.actions[keys[i]].getClip() !== this.clips[keys[i]])
          return true;
      } else {
        if (this.clips[keys[i]])
          return true;
      }
    }
    return false;
  }
  updateConfigs() {
    this._mixer = void 0;
    this.mixer;
  }
  get baseAction() {
    if (!this._baseAction)
      this._baseAction = Object.values(this.actions)[0];
    return this._baseAction;
  }
  set baseAction(action) {
    this._baseAction = action;
  }
  setBaseAction(actionName) {
    this._baseAction = this.getAction(actionName);
  }
  setWeight(action, weight) {
    if (typeof action === "string") {
      action = this.getAction(action);
    }
    action?.setEffectiveWeight(weight);
  }
  getAction(name) {
    return this.actions[name];
  }
  getWeight(action) {
    if (typeof action === "string") {
      action = this.getAction(action);
    }
    return action?.getEffectiveWeight() | 0;
  }
  mix(actionName, transitionTime = 0.1, weight = 1, warp = true) {
    const action = this.getAction(actionName);
    if (!action)
      return;
    if (action === this.activeAction) {
      action.setEffectiveWeight(weight);
      if (weight < 1) {
        this.baseAction.enabled = true;
        this.baseAction.setEffectiveTimeScale(1);
        this.baseAction?.setEffectiveWeight(1 - weight);
      }
      return;
    }
    action.reset();
    if (!this.activeAction) {
      this.activeAction = action;
    }
    this.activeAction.enabled = true;
    action.enabled = true;
    if (weight >= 0.8) {
      this.setWeight(this.baseAction, 0);
    }
    action.crossFadeFrom(this.activeAction, transitionTime, warp);
    this.setWeight(action, weight);
    this.baseAction = this.activeAction;
    this.activeAction = action;
  }
  getRootBone() {
    return this.findRootBone(this.object3d);
  }
  findRootBone(object) {
    if (object instanceof three__WEBPACK_IMPORTED_MODULE_1__.Bone) {
      return object;
    }
    for (let child of object.children) {
      const skeleton = this.findRootBone(child);
      if (skeleton)
        return skeleton;
    }
    return;
  }
  onAnimationFinished(cb) {
    this.animationFinishedListeners.push(cb);
  }
  awake() {
    this.editorUpdate?.stop();
    this.editorUpdate = void 0;
  }
  start() {
    this.updateConfigs();
    this.mixer.existingAction(this.animations[this.selected])?.reset();
    this.mixer.stopAllAction();
    Object.values(this.actions).forEach((action, i) => {
      if (!action)
        return;
      action.play();
      this.setWeight(action, 0);
    });
    this.mixer.removeEventListener("finished", this.animationFinished);
    this.mixer.addEventListener("finished", this.animationFinished);
    const actionName = Object.keys(this.actions)[0];
    this.mix(actionName);
  }
  update() {
    const rootBone = this.getRootBone();
    let pos = v0;
    if (rootBone) {
      pos = rootBone.position.clone();
    }
    this.mixer.update(rogue_engine__WEBPACK_IMPORTED_MODULE_0__.Runtime.deltaTime);
    if (rootBone) {
      rootBone.position.x = pos.x;
      rootBone.position.z = pos.z;
    }
  }
};
__name(RogueAnimator, "RogueAnimator");
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.map.animation()
], RogueAnimator.prototype, "clips", 2);
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.select()
], RogueAnimator.prototype, "selected", 1);
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.button()
], RogueAnimator.prototype, "play", 1);
RogueAnimator = __decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.registerComponent
], RogueAnimator);



/***/ }),

/***/ "./Assets/rogue_packages/RogueEngine/rogue-rapier/Components/Colliders/RapierBall.re.ts":
/*!**********************************************************************************************!*\
  !*** ./Assets/rogue_packages/RogueEngine/rogue-rapier/Components/Colliders/RapierBall.re.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RapierBall)
/* harmony export */ });
/* harmony import */ var _dimforge_rapier3d_compat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @dimforge/rapier3d-compat */ "./node_modules/@dimforge/rapier3d-compat/rapier.es.js");
/* harmony import */ var rogue_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rogue-engine */ "rogue-engine");
/* harmony import */ var rogue_engine__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rogue_engine__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Lib_RogueRapier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Lib/RogueRapier */ "./Assets/rogue_packages/RogueEngine/rogue-rapier/Lib/RogueRapier.ts");
/* harmony import */ var _RapierCollider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RapierCollider */ "./Assets/rogue_packages/RogueEngine/rogue-rapier/Components/Colliders/RapierCollider.ts");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};





class RapierBall extends _RapierCollider__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor() {
    super(...arguments);
    this._radiusOffset = 0;
    this.worldScale = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3();
  }
  get radiusOffset() {
    return this._radiusOffset;
  }
  set radiusOffset(value) {
    const oldValue = this._radiusOffset;
    this._radiusOffset = value;
    if (oldValue !== value && this.collider && _Lib_RogueRapier__WEBPACK_IMPORTED_MODULE_2__["default"].world) {
      _Lib_RogueRapier__WEBPACK_IMPORTED_MODULE_2__["default"].world.removeCollider(this.collider, false);
      this.init();
    }
  }
  createShape() {
    this.object3d.getWorldScale(this.worldScale);
    const maxSide = Math.max(this.worldScale.x, this.worldScale.y, this.worldScale.z);
    let colliderDesc = _dimforge_rapier3d_compat__WEBPACK_IMPORTED_MODULE_4__["default"].ColliderDesc.ball(this.radiusOffset + maxSide);
    this.collider = _Lib_RogueRapier__WEBPACK_IMPORTED_MODULE_2__["default"].world.createCollider(colliderDesc, this.body);
  }
}
__name(RapierBall, "RapierBall");
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.num()
], RapierBall.prototype, "radiusOffset", 1);
rogue_engine__WEBPACK_IMPORTED_MODULE_0__.registerComponent(RapierBall);


/***/ }),

/***/ "./Assets/rogue_packages/RogueEngine/rogue-rapier/Components/Colliders/RapierCapsule.re.ts":
/*!*************************************************************************************************!*\
  !*** ./Assets/rogue_packages/RogueEngine/rogue-rapier/Components/Colliders/RapierCapsule.re.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RapierCapsule)
/* harmony export */ });
/* harmony import */ var _dimforge_rapier3d_compat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @dimforge/rapier3d-compat */ "./node_modules/@dimforge/rapier3d-compat/rapier.es.js");
/* harmony import */ var rogue_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rogue-engine */ "rogue-engine");
/* harmony import */ var rogue_engine__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rogue_engine__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Lib_RogueRapier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Lib/RogueRapier */ "./Assets/rogue_packages/RogueEngine/rogue-rapier/Lib/RogueRapier.ts");
/* harmony import */ var _RapierCollider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RapierCollider */ "./Assets/rogue_packages/RogueEngine/rogue-rapier/Components/Colliders/RapierCollider.ts");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};





class RapierCapsule extends _RapierCollider__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor() {
    super(...arguments);
    this._halfHeight = 0.5;
    this._radius = 0.5;
    this.worldScale = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3();
  }
  get halfHeight() {
    return this._halfHeight;
  }
  set halfHeight(value) {
    const oldValue = this._halfHeight;
    this._halfHeight = value;
    if (oldValue !== value && this.collider && _Lib_RogueRapier__WEBPACK_IMPORTED_MODULE_2__["default"].world) {
      _Lib_RogueRapier__WEBPACK_IMPORTED_MODULE_2__["default"].world.removeCollider(this.collider, false);
      this.init();
    }
  }
  get radius() {
    return this._radius;
  }
  set radius(value) {
    const oldValue = this._radius;
    this._radius = value;
    if (oldValue !== value && this.collider && _Lib_RogueRapier__WEBPACK_IMPORTED_MODULE_2__["default"].world) {
      _Lib_RogueRapier__WEBPACK_IMPORTED_MODULE_2__["default"].world.removeCollider(this.collider, false);
      this.init();
    }
  }
  createShape() {
    this.object3d.getWorldScale(this.worldScale);
    const maxSide = Math.max(this.worldScale.x, this.worldScale.z);
    let colliderDesc = _dimforge_rapier3d_compat__WEBPACK_IMPORTED_MODULE_4__["default"].ColliderDesc.capsule(this.halfHeight * this.worldScale.y, this.radius * maxSide);
    this.collider = _Lib_RogueRapier__WEBPACK_IMPORTED_MODULE_2__["default"].world.createCollider(colliderDesc, this.body);
  }
}
__name(RapierCapsule, "RapierCapsule");
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.num()
], RapierCapsule.prototype, "halfHeight", 1);
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.num()
], RapierCapsule.prototype, "radius", 1);
rogue_engine__WEBPACK_IMPORTED_MODULE_0__.registerComponent(RapierCapsule);


/***/ }),

/***/ "./Assets/rogue_packages/RogueEngine/rogue-rapier/Components/Colliders/RapierCollider.ts":
/*!***********************************************************************************************!*\
  !*** ./Assets/rogue_packages/RogueEngine/rogue-rapier/Components/Colliders/RapierCollider.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RapierCollider)
/* harmony export */ });
/* harmony import */ var _dimforge_rapier3d_compat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @dimforge/rapier3d-compat */ "./node_modules/@dimforge/rapier3d-compat/rapier.es.js");
/* harmony import */ var rogue_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rogue-engine */ "rogue-engine");
/* harmony import */ var rogue_engine__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rogue_engine__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Lib_RogueRapier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Lib/RogueRapier */ "./Assets/rogue_packages/RogueEngine/rogue-rapier/Lib/RogueRapier.ts");
/* harmony import */ var _RapierBody_re__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../RapierBody.re */ "./Assets/rogue_packages/RogueEngine/rogue-rapier/Components/RapierBody.re.ts");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};





const _RapierCollider = class extends rogue_engine__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments);
    this.initialized = false;
    this.localPos = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3();
    this.worldPos = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3();
    this.localRot = new three__WEBPACK_IMPORTED_MODULE_1__.Quaternion();
    this.worldQuaternion = new three__WEBPACK_IMPORTED_MODULE_1__.Quaternion();
    this.isSensor = false;
    this.collisionEvents = false;
  }
  static findByShape(shape) {
    let shapeComponent;
    rogue_engine__WEBPACK_IMPORTED_MODULE_0__.traverseComponents((component) => {
      if (shapeComponent)
        return;
      if (component instanceof _RapierCollider && component.collider === shape) {
        shapeComponent = component;
      }
    });
    return shapeComponent;
  }
  init() {
    this.bodyComponent = this.getBodyComponent(this.object3d);
    if (!this.bodyComponent)
      return;
    if (!this.bodyComponent.body)
      return;
    this.body = this.bodyComponent.body;
    this.createShape();
    this.collider.setSensor(this.isSensor);
    this.collisionEvents && this.collider.setActiveEvents(_dimforge_rapier3d_compat__WEBPACK_IMPORTED_MODULE_4__["default"].ActiveEvents.COLLISION_EVENTS);
    this.setColliderPos();
    this.setColliderRot();
    this.initialized = true;
  }
  setColliderPos() {
    this.object3d.updateWorldMatrix(true, true);
    this.object3d.getWorldPosition(this.worldPos);
    this.collider.setTranslation(this.worldPos);
  }
  setColliderRot() {
    this.object3d.updateWorldMatrix(true, true);
    this.object3d.getWorldQuaternion(this.worldQuaternion);
    this.collider.setRotation(this.worldQuaternion);
  }
  beforeUpdate() {
    if (!_Lib_RogueRapier__WEBPACK_IMPORTED_MODULE_2__["default"].initialized)
      return;
    if (!this.initialized)
      this.init();
    if (!this.collider)
      return;
    this.setColliderPos();
    this.setColliderRot();
  }
  onDisabled() {
    _Lib_RogueRapier__WEBPACK_IMPORTED_MODULE_2__["default"].world.removeCollider(this.collider, false);
  }
  onBeforeObjectRemoved() {
    _Lib_RogueRapier__WEBPACK_IMPORTED_MODULE_2__["default"].world.removeCollider(this.collider, false);
  }
  getBodyComponent(object3d) {
    const bodyComponent = _RapierBody_re__WEBPACK_IMPORTED_MODULE_3__["default"].get(object3d);
    if (bodyComponent) {
      return bodyComponent;
    }
    if (!object3d.parent)
      return;
    return this.getBodyComponent(object3d.parent);
  }
  createShape() {
  }
};
let RapierCollider = _RapierCollider;
__name(RapierCollider, "RapierCollider");
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.checkbox()
], RapierCollider.prototype, "isSensor", 2);
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.checkbox()
], RapierCollider.prototype, "collisionEvents", 2);



/***/ }),

/***/ "./Assets/rogue_packages/RogueEngine/rogue-rapier/Components/Colliders/RapierCone.re.ts":
/*!**********************************************************************************************!*\
  !*** ./Assets/rogue_packages/RogueEngine/rogue-rapier/Components/Colliders/RapierCone.re.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RapierCone)
/* harmony export */ });
/* harmony import */ var _dimforge_rapier3d_compat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @dimforge/rapier3d-compat */ "./node_modules/@dimforge/rapier3d-compat/rapier.es.js");
/* harmony import */ var rogue_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rogue-engine */ "rogue-engine");
/* harmony import */ var rogue_engine__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rogue_engine__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Lib_RogueRapier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Lib/RogueRapier */ "./Assets/rogue_packages/RogueEngine/rogue-rapier/Lib/RogueRapier.ts");
/* harmony import */ var _RapierCollider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RapierCollider */ "./Assets/rogue_packages/RogueEngine/rogue-rapier/Components/Colliders/RapierCollider.ts");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};





class RapierCone extends _RapierCollider__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor() {
    super(...arguments);
    this._halfHeight = 0.5;
    this._radius = 0.5;
    this.worldScale = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3();
  }
  get halfHeight() {
    return this._halfHeight;
  }
  set halfHeight(value) {
    const oldValue = this._halfHeight;
    this._halfHeight = value;
    if (oldValue !== value && this.collider && _Lib_RogueRapier__WEBPACK_IMPORTED_MODULE_2__["default"].world) {
      _Lib_RogueRapier__WEBPACK_IMPORTED_MODULE_2__["default"].world.removeCollider(this.collider, false);
      this.init();
    }
  }
  get radius() {
    return this._radius;
  }
  set radius(value) {
    const oldValue = this._radius;
    this._radius = value;
    if (oldValue !== value && this.collider && _Lib_RogueRapier__WEBPACK_IMPORTED_MODULE_2__["default"].world) {
      _Lib_RogueRapier__WEBPACK_IMPORTED_MODULE_2__["default"].world.removeCollider(this.collider, false);
      this.init();
    }
  }
  createShape() {
    this.object3d.getWorldScale(this.worldScale);
    const maxSide = Math.max(this.worldScale.x, this.worldScale.z);
    let colliderDesc = _dimforge_rapier3d_compat__WEBPACK_IMPORTED_MODULE_4__["default"].ColliderDesc.cone(this.halfHeight * this.worldScale.y, this.radius * maxSide);
    this.collider = _Lib_RogueRapier__WEBPACK_IMPORTED_MODULE_2__["default"].world.createCollider(colliderDesc, this.body);
  }
}
__name(RapierCone, "RapierCone");
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.num()
], RapierCone.prototype, "halfHeight", 1);
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.num()
], RapierCone.prototype, "radius", 1);
rogue_engine__WEBPACK_IMPORTED_MODULE_0__.registerComponent(RapierCone);


/***/ }),

/***/ "./Assets/rogue_packages/RogueEngine/rogue-rapier/Components/Colliders/RapierCuboid.re.ts":
/*!************************************************************************************************!*\
  !*** ./Assets/rogue_packages/RogueEngine/rogue-rapier/Components/Colliders/RapierCuboid.re.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RapierCuboid)
/* harmony export */ });
/* harmony import */ var _dimforge_rapier3d_compat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @dimforge/rapier3d-compat */ "./node_modules/@dimforge/rapier3d-compat/rapier.es.js");
/* harmony import */ var rogue_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rogue-engine */ "rogue-engine");
/* harmony import */ var rogue_engine__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rogue_engine__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Lib_RogueRapier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Lib/RogueRapier */ "./Assets/rogue_packages/RogueEngine/rogue-rapier/Lib/RogueRapier.ts");
/* harmony import */ var _RapierCollider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RapierCollider */ "./Assets/rogue_packages/RogueEngine/rogue-rapier/Components/Colliders/RapierCollider.ts");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};





class RapierCuboid extends _RapierCollider__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor() {
    super(...arguments);
    this._sizeOffsetX = 1;
    this._sizeOffsetY = 1;
    this._sizeOffsetZ = 1;
    this.worldScale = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3();
  }
  get sizeOffsetX() {
    return this._sizeOffsetX;
  }
  set sizeOffsetX(value) {
    const oldValue = this._sizeOffsetX;
    this._sizeOffsetX = value;
    if (oldValue !== value && this.collider && _Lib_RogueRapier__WEBPACK_IMPORTED_MODULE_2__["default"].world) {
      _Lib_RogueRapier__WEBPACK_IMPORTED_MODULE_2__["default"].world.removeCollider(this.collider, false);
      this.init();
    }
  }
  get sizeOffsetY() {
    return this._sizeOffsetY;
  }
  set sizeOffsetY(value) {
    const oldValue = this._sizeOffsetY;
    this._sizeOffsetY = value;
    if (oldValue !== value && this.collider && _Lib_RogueRapier__WEBPACK_IMPORTED_MODULE_2__["default"].world) {
      _Lib_RogueRapier__WEBPACK_IMPORTED_MODULE_2__["default"].world.removeCollider(this.collider, false);
      this.init();
    }
  }
  get sizeOffsetZ() {
    return this._sizeOffsetZ;
  }
  set sizeOffsetZ(value) {
    const oldValue = this._sizeOffsetZ;
    this._sizeOffsetZ = value;
    if (oldValue !== value && this.collider && _Lib_RogueRapier__WEBPACK_IMPORTED_MODULE_2__["default"].world) {
      _Lib_RogueRapier__WEBPACK_IMPORTED_MODULE_2__["default"].world.removeCollider(this.collider, false);
      this.init();
    }
  }
  createShape() {
    this.object3d.getWorldScale(this.worldScale);
    let colliderDesc = _dimforge_rapier3d_compat__WEBPACK_IMPORTED_MODULE_4__["default"].ColliderDesc.cuboid(this._sizeOffsetX * (this.worldScale.x / 2), this._sizeOffsetY * (this.worldScale.y / 2), this._sizeOffsetZ * (this.worldScale.z / 2));
    this.collider = _Lib_RogueRapier__WEBPACK_IMPORTED_MODULE_2__["default"].world.createCollider(colliderDesc, this.body);
  }
}
__name(RapierCuboid, "RapierCuboid");
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.num()
], RapierCuboid.prototype, "sizeOffsetX", 1);
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.num()
], RapierCuboid.prototype, "sizeOffsetY", 1);
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.num()
], RapierCuboid.prototype, "sizeOffsetZ", 1);
rogue_engine__WEBPACK_IMPORTED_MODULE_0__.registerComponent(RapierCuboid);


/***/ }),

/***/ "./Assets/rogue_packages/RogueEngine/rogue-rapier/Components/Colliders/RapierCylinder.re.ts":
/*!**************************************************************************************************!*\
  !*** ./Assets/rogue_packages/RogueEngine/rogue-rapier/Components/Colliders/RapierCylinder.re.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RapierCylinder)
/* harmony export */ });
/* harmony import */ var _dimforge_rapier3d_compat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @dimforge/rapier3d-compat */ "./node_modules/@dimforge/rapier3d-compat/rapier.es.js");
/* harmony import */ var rogue_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rogue-engine */ "rogue-engine");
/* harmony import */ var rogue_engine__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rogue_engine__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Lib_RogueRapier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Lib/RogueRapier */ "./Assets/rogue_packages/RogueEngine/rogue-rapier/Lib/RogueRapier.ts");
/* harmony import */ var _RapierCollider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RapierCollider */ "./Assets/rogue_packages/RogueEngine/rogue-rapier/Components/Colliders/RapierCollider.ts");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};





class RapierCylinder extends _RapierCollider__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor() {
    super(...arguments);
    this._halfHeight = 0.5;
    this._radius = 1;
    this.worldScale = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3();
  }
  get halfHeight() {
    return this._halfHeight;
  }
  set halfHeight(value) {
    const oldValue = this._halfHeight;
    this._halfHeight = value;
    if (oldValue !== value && this.collider && _Lib_RogueRapier__WEBPACK_IMPORTED_MODULE_2__["default"].world) {
      _Lib_RogueRapier__WEBPACK_IMPORTED_MODULE_2__["default"].world.removeCollider(this.collider, false);
      this.init();
    }
  }
  get radius() {
    return this._radius;
  }
  set radius(value) {
    const oldValue = this._radius;
    this._radius = value;
    if (oldValue !== value && this.collider && _Lib_RogueRapier__WEBPACK_IMPORTED_MODULE_2__["default"].world) {
      _Lib_RogueRapier__WEBPACK_IMPORTED_MODULE_2__["default"].world.removeCollider(this.collider, false);
      this.init();
    }
  }
  createShape() {
    this.object3d.getWorldScale(this.worldScale);
    const maxSide = Math.max(this.worldScale.x, this.worldScale.z);
    let colliderDesc = _dimforge_rapier3d_compat__WEBPACK_IMPORTED_MODULE_4__["default"].ColliderDesc.cylinder(this.halfHeight * this.worldScale.y, this.radius * maxSide);
    this.collider = _Lib_RogueRapier__WEBPACK_IMPORTED_MODULE_2__["default"].world.createCollider(colliderDesc, this.body);
  }
}
__name(RapierCylinder, "RapierCylinder");
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.num()
], RapierCylinder.prototype, "halfHeight", 1);
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.num()
], RapierCylinder.prototype, "radius", 1);
rogue_engine__WEBPACK_IMPORTED_MODULE_0__.registerComponent(RapierCylinder);


/***/ }),

/***/ "./Assets/rogue_packages/RogueEngine/rogue-rapier/Components/Colliders/RapierTrimesh.re.ts":
/*!*************************************************************************************************!*\
  !*** ./Assets/rogue_packages/RogueEngine/rogue-rapier/Components/Colliders/RapierTrimesh.re.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RapierTrimesh)
/* harmony export */ });
/* harmony import */ var rogue_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rogue-engine */ "rogue-engine");
/* harmony import */ var rogue_engine__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rogue_engine__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dimforge_rapier3d_compat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @dimforge/rapier3d-compat */ "./node_modules/@dimforge/rapier3d-compat/rapier.es.js");
/* harmony import */ var _Lib_RogueRapier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Lib/RogueRapier */ "./Assets/rogue_packages/RogueEngine/rogue-rapier/Lib/RogueRapier.ts");
/* harmony import */ var _RapierCollider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RapierCollider */ "./Assets/rogue_packages/RogueEngine/rogue-rapier/Components/Colliders/RapierCollider.ts");
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });





class RapierTrimesh extends _RapierCollider__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor() {
    super(...arguments);
    this.worldScale = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3();
    this.worldPos = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3();
    this.tmpVec0 = new _dimforge_rapier3d_compat__WEBPACK_IMPORTED_MODULE_4__["default"].Vector3(0, 0, 0);
    this.tmpVec1 = new _dimforge_rapier3d_compat__WEBPACK_IMPORTED_MODULE_4__["default"].Vector3(0, 0, 0);
    this.tmpVec2 = new _dimforge_rapier3d_compat__WEBPACK_IMPORTED_MODULE_4__["default"].Vector3(0, 0, 0);
    this.tmpQuat0 = new _dimforge_rapier3d_compat__WEBPACK_IMPORTED_MODULE_4__["default"].Vector3(0, 0, 0);
  }
  createShape() {
    if (!(this.object3d instanceof three__WEBPACK_IMPORTED_MODULE_1__.Mesh))
      return;
    this.object3d.updateWorldMatrix(true, true);
    this.object3d.getWorldScale(this.worldScale);
    this.object3d.getWorldPosition(this.worldPos);
    this.object3d.getWorldQuaternion(this.worldQuaternion);
    const mesh = this.object3d;
    let geometry = mesh.geometry;
    const vertices = this.getVertices(geometry);
    if (!vertices.length)
      return;
    const indices = geometry.getIndex();
    if (!indices)
      return;
    let cleanIndiArray = [];
    for (let i = 0; i < indices.count; i += 3) {
      const a = indices.getX(i);
      const b = indices.getX(i + 1);
      const c = indices.getX(i + 2);
      cleanIndiArray.push(a, b, c);
    }
    let colliderDesc = _dimforge_rapier3d_compat__WEBPACK_IMPORTED_MODULE_4__["default"].ColliderDesc.trimesh(vertices, new Uint32Array(cleanIndiArray));
    this.collider = _Lib_RogueRapier__WEBPACK_IMPORTED_MODULE_2__["default"].world.createCollider(colliderDesc, this.body);
  }
  getVertices(geometry) {
    const position = geometry.attributes.position;
    const vertices = new Float32Array(position.count * 3);
    for (let i = 0; i < position.count; i++) {
      vertices[i * 3] = position.getX(i) * this.worldScale.x;
      vertices[i * 3 + 1] = position.getY(i) * this.worldScale.y;
      vertices[i * 3 + 2] = position.getZ(i) * this.worldScale.z;
    }
    return vertices;
  }
}
__name(RapierTrimesh, "RapierTrimesh");
rogue_engine__WEBPACK_IMPORTED_MODULE_0__.registerComponent(RapierTrimesh);


/***/ }),

/***/ "./Assets/rogue_packages/RogueEngine/rogue-rapier/Components/Controllers/RapierFirstPersonController.re.ts":
/*!*****************************************************************************************************************!*\
  !*** ./Assets/rogue_packages/RogueEngine/rogue-rapier/Components/Controllers/RapierFirstPersonController.re.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ });
};