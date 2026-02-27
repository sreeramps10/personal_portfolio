export const assignmentProjects = [
  {
    id: 5,
    title: 'Drywall Taping Robot End Effector',
    image: '/images/projects/drywall.png',
    category: 'Robot Mechanism',
    description:
      'End effector designed to mount on a 6-axis robotic arm and automate drywall joint finishing. Integrates three subsystems: a DC motor-driven belt-feed tape dispenser (inspired by packing tape guns), an HDPE compound reservoir with a PTFE nozzle pipe, and a stainless steel scraper for a consistent finish. Steel ASTM A36 chassis; full FMEA covering tape tear, belt slip, and scraper wear. Total assembly weight of 2,776 g sits well within the 8 kg arm payload limit. Includes DFM/DFA analysis, material selection rationale, and manufacturing cost estimate of Rs 35,000–50,000.',
    pdfFile: 'Drywall Taping Robot End Effector.pdf',
  },
  {
    id: 1,
    title: 'Vertical Climbing Robot',
    image: '/images/projects/vertical_climbing.png',
    category: 'Robotics',
    description:
      'Design of a vertical climbing robot system for automated warehousing, centred on a spring-loaded pinion aligner mechanism that ensures continuous rack engagement across an 8-ft track. An Aluminium 6061 sliding block, constrained by twin linear guide rails and pushed by a compression spring, houses a 12 mm axle on 6001 series bearings across a 60 mm span. The AISI 4140 (QT) rack uses Module-3 teeth at a 20° pressure angle, manufactured in 1.6 ft modular segments joined by H7-tolerance dowel pins and M8 Grade-8.8 bolts to maintain pitch continuity. Full BOM, DFA analysis, and manufacturing process plan included; total pinion assembly cost Rs 10,920.',
    pdfFile: 'Accio Robotics Assignment.pdf',
  },
  {
    id: 9,
    title: 'UAV Quick-Release Folding Arm Joint',
    image: '/images/projects/UAV_joint.png',
    category: 'Unmanned Systems',
    description:
      'Quick-release folding arm joint for a UAV motor arm, designed for a 50 mm arm tube and 60 kg in-flight load. An interference fit with magnetic stop lock enables tool-free folding and clicks rigid for flight. Aluminium 7075 blocks (Type III hard-anodized), PTFE bearings, and stainless steel hinge pins yield a 166 g assembly rated to 2,943 N (2.5× SF). ANSYS FEA (static structural + modal) validated under 3 mm max deformation at design load. Manufactured via 5-axis CNC milling with H7/g6 pin-bore tolerances to eliminate structural play.',
    pdfFile: 'UNMANND Assignment - Sreeram Padmesh.pdf',
  },
  {
    id: 2,
    title: 'Binocular Camera Calibration Setup',
    image: '/images/projects/camera_calibration.png',
    category: 'Precision Instrumentation',
    description:
      'Calibration instrument to find the parallel-most orientation between two motor-driven rotating cameras using autocollimation principles. A ring light replaces the conventional crosshair reticle, paired with a first-surface mirror mounted 150 mm from the camera, yielding a 40 μm / 0.0000153° positional tolerance derived from D = tan(2θ)K. Three independent verification methods — concentric reflected ring centres, maximum ellipse minor-axis length, and checkerboard-derived principal point — all converge at 16.7° rotation (767 encoder counts) per camera. Matte-black enclosed CAD assembly with a base flatness of ±0.02 mm to suppress stray reflections and vibration.',
    pdfFile: 'CynLr Assignment.pdf',
  },
]

export const engineeringProjects = [
  {
    id: 7,
    title: 'Gripper Design',
    image: '/images/projects/gripper.png',
    category: 'Mechanism Design',
    description:
      'Designed and prototyped a parallel 4-bar (parallelogram) linkage gripper with a 35–100 mm finger stroke and 1 DOF. A 3:1 spur gear train amplifies an MG958 servo\'s 20 kg·cm stall torque to 60 kg·cm at the fingers — achieving a 4× safety factor over the 12.51 kg·cm required to lift a 500 g payload. Arduino Uno controlled. Two design iterations refined 3D-printing tolerances: V2 fixed undersized bolt holes, added 1 mm chamfers, and corrected gear centre distances confirmed with a Vernier calliper.',
    pdfFile: 'Gripper.pdf',
  },
  {
    id: 8,
    title: 'Rack and Pinion Gripper',
    image: '/images/projects/rack_and_pinion.png',
    category: 'Mechanism Design',
    description:
      'Lightweight rack-and-pinion gripper designed to pick a 2 kg, 100×100×100 mm cube within a 100 g total weight budget. A central pinion (16 teeth, 1 mm module, 20° pressure angle, 0.7 mechanical efficiency) drives two opposing racks to deliver 28.03 N clamping force (14.015 N per finger) at a 2× safety factor, with rubber pads providing a 0.7 friction coefficient against the wooden payload. Required torque of 3.265 kg·cm is met by an EMAX ES3004 servo (3.5 kg·cm, 20 g). PETG body estimated via ABS-to-PETG density ratio (1.17); total assembly including motor comes to 97.03 g — just within the 100 g constraint.',
    pdfFile: 'Rack and Pinion Gripper.pdf',
  },
  {
    id: 4,
    title: 'Wheelchair ISO 7176-1 Static Stability – DOP',
    image: '/images/projects/wheelchair.png',
    category: 'Product Design',
    description:
      'Computational verification of ISO 7176-1 static stability for a 19.9 kg wheelchair CAD model (target 20 kg), covering all 16 test conditions — 4 tilt directions × dummy included/excluded × wheels locked/unlocked. Two parallel approaches were used: a Python geometric method (combined COG trigonometry via mass-weighted centre of gravity of wheelchair and 100 kg dummy) and ANSYS FEA (gravity vector rotated to simulate plank incline; axle-wheel contact set frictionless or bonded for unlocked/locked; rough contact patch to prevent sliding). The 100 kg dummy was modelled in 6 body segments (head/neck to feet) with densities from David A. Winter\'s biomechanics data, yielding COG at (192.18, 733, 302.81) mm. AI-model dummy placement gave simulation tipping angles of 13° forward, 15° backward, and 18° sideward against experimental values of 12°, 13°, 17°, and 9°.',
    pdfFile: 'DOP - Wheelchair Simulation.pdf',
  },
  {
    id: 3,
    title: 'Johnson-Cook Damage Parameters via Jaya Algorithm',
    image: '/images/projects/johnson_cook.png',
    category: 'Simulation & Research',
    description:
      'Research project to determine Johnson-Cook damage parameters (D1–D5 + damage evolution) for a thin-walled aluminium crash-box tubular structure used in crashworthiness applications. Experimental force-displacement data (0–69.5 mm at 0.5 mm intervals) was digitised from literature using WebPlotDigitizer. 150 randomly generated parameter sets (D1–D5 ∈ [−10, 10], damage evolution ∈ [0, 1]) were each simulated in ABAQUS under quasi-static loading; Python (scikit-learn) computed RMSE between each simulated and experimental force-displacement curve. A 28-coefficient polynomial response surface OBJ(x) = a₀ + Σaᵢvᵢ + Σbᵢⱼvᵢvⱼ was fitted to the RMSE data, and the Jaya metaheuristic algorithm was then applied to minimize this objective function and identify the optimal damage parameter set.',
    pdfFile: 'Determination of Johnson Cook Damage Parameters using Jaya Algorithm.pdf',
  },
  {
    id: 6,
    title: 'Autonomous Self-Parking Robot',
    image: '/images/projects/self_parking.png',
    category: 'Robotics',
    description:
      'Differential-drive robot that autonomously detects and parks in a colour-coded bay. Built on a foam-board chassis with 4 TT gear motors driven by a Motor Driver Shield and an Arduino Uno programmed in C++. A TCS3200 colour sensor identifies red parking spots via threshold comparison; an HC-SR04 ultrasonic sensor mounted on an SG90 servo scans 0–180° for obstacle avoidance using lookRight()/lookLeft() pivot logic. Speed is ramped via a for-loop to avoid wheel slip on start-up. Powered by 2× 18650 Li-ion batteries.',
    pdfFile: 'Final Report (1).pdf',
  },
]

export const codingProjects = [
  {
    id: 1,
    title: 'Dual-Robot Parcel Sorting System',
    description:
      'Python/Pygame logistics simulation of two autonomous robots operating in a 20×20 grid. Robots share a single pickup point (max 5 parcel buffer) and deliver to 3 designated locations that reset after accumulating 20 parcels each; new parcels spawn every 4 seconds with randomised destinations. A* pathfinding drives route planning with real-time collision avoidance between agents. Codebase is split across 9 modular files — main.py drives the loop, simulation.py orchestrates robot and parcel state, and utils.py houses the A* implementation and helpers.',
    tags: ['Python', 'Pygame', 'A* Algorithm', 'Robotics Simulation'],
    githubUrl: 'https://github.com/sreeramps10/Dual-Robot-Parcel-Sorting-System',
  },
  {
    id: 2,
    title: 'MNIST Classification – ML Notebooks',
    description:
      'Two Jupyter notebooks exploring neural network classification from first principles through to framework-level training. The first notebook builds a 2-layer feedforward network from scratch (784→10 ReLU→10 softmax) using NumPy backpropagation on 40,000 MNIST digit samples, reaching 93.1% accuracy after ~6,000 gradient descent steps. The second notebook applies TensorFlow/Keras (784→128 ReLU→10 softmax, Adam optimiser, sparse categorical crossentropy) to the Fashion MNIST dataset (60k train / 10k test across 10 clothing categories), achieving 87.45% training and 85.65% test accuracy in 5 epochs.',
    tags: ['Python', 'Jupyter Notebook', 'Machine Learning', 'Neural Networks'],
    githubUrl: 'https://github.com/sreeramps10/MiniProject',
  },
]
