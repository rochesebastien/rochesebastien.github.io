const renderer = new THREE.WebGLRenderer({ alpha: true });
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
const scene = new THREE.Scene();
let Mesh;
let light;
let mixer;
let clock = new THREE.Clock();
let three_model;
var controls;

    function init() {
        // scene.background = new THREE.Color('black');
        renderer.setClearColor( 0x000000, 0 ); 

        camera.lookAt(0,0,500);
        // var tg = document.querySelector("canvas")
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);
        controls = new THREE.OrbitControls( camera, renderer.domElement );
        controls.target.set(0,0,5)
        controls.enableZoom = false;
        controls.enablePan = false;
        // empêcher la rotation sur le haut
        // controls.maxPolarAngle = Math.PI / 2
        controls.enableDamping = true;
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
            controls.rotateSpeed = 4;
            camera.position.set(0,0,150);
        } else {
            camera.position.set(0,0,90);
        }

        controls.mouseButtons = {
            LEFT: THREE.MOUSE.ROTATE,
            MIDDLE: THREE.MOUSE.DOLLY,
        }        
        
    }

    function setLight() {

       
                const light = new THREE.PointLight( 0xffffff, 1, 100 );
            // light.position.set( 0, 10, 4 );
            light.castShadow = true;
            scene.add( light );
    }

    function loadGLTF() {
        let balloonLoader = new THREE.GLTFLoader();

        balloonLoader.load(three_model, (gltf) => {
            Mesh = gltf.scene;
            Mesh.scale.set(0.5, 0.5, 0.5);
            scene.add(Mesh);
            Mesh.position.x = -13;
            Mesh.position.y = -20;
            Mesh.position.z = 20;
            
            mixer = new THREE.AnimationMixer( Mesh );
            mixer.clipAction(gltf.animations[0]).play();
            mixer.clipAction(gltf.animations[1]).play();
        });
    }

    

    function animate() {
        id = requestAnimationFrame(animate);
        if(mixer){
            controls.update();
            let delta = clock.getDelta();
            mixer.update( delta );
            renderer.render(scene, camera);
        }
        
    }
    three_model = "../assets/model/logo_white.gltf";
    init();
    loadGLTF();
    setLight();
    animate();


    

