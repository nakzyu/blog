import { useEffect, useRef } from "react";
import { Engine, Scene } from "@babylonjs/core";

type SceneComponentProps = {
  onRender: (scene: Scene) => void;
  onSceneReady: (scene: Scene) => void;
};

const SceneComponent = ({ onRender, onSceneReady }: SceneComponentProps) => {
  const reactCanvas = useRef(null);

  // set up basic engine and scene
  useEffect(() => {
    const { current: canvas } = reactCanvas;

    if (!canvas) return;

    const engine = new Engine(canvas);
    const scene = new Scene(engine);
    if (scene.isReady()) {
      onSceneReady(scene);
    } else {
      scene.onReadyObservable.addOnce((scene) => onSceneReady(scene));
    }

    engine.runRenderLoop(() => {
      if (typeof onRender === "function") onRender(scene);
      scene.render();
    });

    const resize = () => {
      scene.getEngine().resize();
    };

    if (window) {
      window.addEventListener("resize", resize);
    }

    return () => {
      scene.getEngine().dispose();

      if (window) {
        window.removeEventListener("resize", resize);
      }
    };
  }, [onRender, onSceneReady]);

  return <canvas ref={reactCanvas} />;
};

export default SceneComponent;
