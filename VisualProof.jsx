import React, { useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const VisualProof = () => {
  const [step, setStep] = useState(0);

  // Constants for the geometry
  // Derivation: 2r^2 + 2r - 1 = 0  => r = (sqrt(3)-1)/2
  const SQ_Sqrt3 = Math.sqrt(3);
  const SQ_Sqrt2 = Math.sqrt(2);
  
  const R = (SQ_Sqrt3 - 1) / 2; // Radius of semicircle ~0.366
  const DIAMETER_SMALL = (SQ_Sqrt3 - 1) * (SQ_Sqrt2 - 1);
  const RADIUS_SMALL = DIAMETER_SMALL / 2;
  
  // Coordinates for centers of semicircles (Pinwheel configuration)
  // Note: SVG Coordinate system has (0,0) at Top-Left.
  // To match the Visuals:
  // centers[0] is at y=1 (SVG Bottom) -> Corresponds to "Bottom" in text
  // centers[1] is at x=1 (SVG Right)  -> Corresponds to "Right" in text
  const centers = [
    { x: R, y: 1, label: "C1" },       // Visual Bottom
    { x: 1, y: 1 - R, label: "C2" },   // Visual Right
    { x: 1 - R, y: 0, label: "C3" },   // Visual Top
    { x: 0, y: R, label: "C4" },       // Visual Left
  ];

  const squareCenter = { x: 0.5, y: 0.5 };

  // Proof Content Data
  const steps = [
    {
      title: "Problem Statement",
      content: (
        <div className="space-y-4 text-base">
          <p>Four congruent semicircles are inscribed in a square of side length 1 so that their diameters are on the sides of the square, one endpoint of each diameter is at a vertex of the square, and adjacent semicircles are tangent to each other.</p>
          <p>A small circle centered at the center of the square is tangent to each of the four semicircles.</p>
          <p className="bg-gray-100 p-3 rounded border border-gray-300 font-serif text-center">
            The diameter of the small circle can be written as<br/> 
            <strong>(√a + b)(√c + d)</strong>,<br/> 
            where a, b, c, and d are integers.
          </p>
          <p className="font-bold text-indigo-700 text-center text-lg">What is a + b + c + d?</p>
        </div>
      ),
      highlight: "problem_statement"
    },
    {
      title: "Understanding the Layout",
      content: (
        <div className="space-y-4">
          <p>We have a unit square (Side = 1).</p>
          <p>Four congruent semicircles are inscribed. Notice the pattern: each diameter starts at a vertex and lies on a side.</p>
          <p>Let <strong>r</strong> be the radius of these semicircles.</p>
          <div className="bg-blue-50 p-3 rounded border border-blue-200 text-sm text-blue-800">
            <strong>Goal:</strong> Find the diameter of the small red circle in the center.
          </div>
        </div>
      ),
      highlight: "setup"
    },
    {
      title: "Find the Radius (r)",
      content: (
        <div className="space-y-4">
          <p>Let's focus on the <strong>Bottom</strong> and <strong>Right</strong> semicircles. They touch each other (they are tangent).</p>
          <p>If we connect their centers, the line passes through the touching point. Therefore, the length of this hypotenuse is <strong>2r</strong>.</p>
          <p>We can form a right triangle to solve for <strong>r</strong>.</p>
        </div>
      ),
      highlight: "find_r_geo"
    },
    {
      title: "Solving for r",
      content: (
        <div className="space-y-4">
          <p>Let's look at the coordinates of the centers (assuming (0,0) is bottom-left):</p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Bottom Center: (r, 0)</li>
            <li>Right Center: (1, r)</li>
          </ul>
          <p>Using the Pythagorean theorem on the blue triangle:</p>
          <div className="font-mono bg-gray-100 p-2 rounded text-sm">
            Leg 1 = 1 - r<br/>
            Leg 2 = r<br/>
            Hypotenuse = 2r
          </div>
          <p className="text-sm italic">Equation: (1-r)² + r² = (2r)²</p>
        </div>
      ),
      highlight: "find_r_calc"
    },
    {
      title: "The Value of r",
      content: (
        <div className="space-y-4">
          <p>Solving 2r² + 2r - 1 = 0 using the quadratic formula:</p>
          <div className="text-center font-serif text-lg py-2 bg-indigo-50 rounded">
            r = (√3 - 1) / 2
          </div>
          <p className="text-sm text-gray-600">We keep the positive root.</p>
        </div>
      ),
      highlight: "r_solved"
    },
    {
      title: "Connect to Center",
      content: (
        <div className="space-y-4">
          <p>Now consider the small circle with radius <strong>x</strong>.</p>
          <p>Connect the Center of the Square (0.5, 0.5) to the Center of the <strong>Bottom</strong> Semicircle (r, 0).</p>
          <p>This line passes through the point where the small circle touches the semicircle. The length is <strong>r + x</strong>.</p>
        </div>
      ),
      highlight: "small_circle_geo"
    },
    {
      title: "Calculate Distance (Setup)",
      content: (
        <div className="space-y-4">
          <p>We form a right triangle (shown in orange) to find the distance D.</p>
          <div className="font-mono bg-gray-100 p-2 rounded text-sm">
            Height = 0.5 - 0 = 0.5<br/>
            Width = |0.5 - r|
          </div>
          <p>Substitute r = (√3 - 1) / 2:</p>
          <p className="font-mono text-xs sm:text-sm bg-gray-50 p-1">Width = 1/2 - (√3 - 1)/2 = (2 - √3)/2</p>
          <p className="text-sm">Now we use the Pythagorean theorem: D² = Width² + Height².</p>
        </div>
      ),
      highlight: "small_circle_calc"
    },
    {
      title: "Solving for Distance D",
      content: (
        <div className="space-y-3">
          <p>Substitute the values into the theorem:</p>
          <div className="font-mono text-xs sm:text-sm bg-gray-100 p-2 rounded overflow-x-auto">
            D² = [(2-√3)/2]² + [1/2]²<br/>
            D² = (7-4√3)/4 + 1/4<br/>
            D² = (8-4√3)/4<br/>
            D² = 2 - √3
          </div>
          <p>We have D = √(2 - √3). This is a "nested radical" that we must simplify.</p>
        </div>
      ),
      highlight: "calc_d"
    },
    {
      title: "Nested Radical Simplification",
      content: (
        <div className="space-y-3">
          <p>We want to simplify D = √(2 - √3).</p>
          <p className="text-sm font-bold text-indigo-700">Trick: Multiply inside by 2/2 to create a perfect square.</p>
          <div className="font-mono text-xs sm:text-sm bg-gray-50 p-2 rounded border-l-4 border-indigo-400">
             D = √[(4 - 2√3) / 2]<br/>
             <span className="text-gray-500 text-xs">// Numerator is a perfect square: (√3 - 1)²</span><br/>
             D = √[(√3 - 1)² / 2]<br/>
             D = (√3 - 1) / √2
          </div>
          <p className="text-sm">
             Check: (√3-1)² = 3 - 2√3 + 1 = 4 - 2√3.
          </p>
        </div>
      ),
      highlight: "calc_d"
    },
    {
      title: "Solving for x",
      content: (
        <div className="space-y-3">
          <p>We know that D = r + x, so <strong>x = D - r</strong>.</p>
          <p className="text-sm">Substitute D and r:</p>
          <div className="font-serif text-center text-sm">
            x = [(√3-1)/√2] - [(√3-1)/2]
          </div>
          <p className="text-sm">Factor out (√3 - 1):</p>
          <div className="font-serif text-center text-sm bg-indigo-50 p-2 rounded border border-indigo-200">
            x = (√3 - 1) * [1/√2 - 1/2]<br/>
            x = (√3 - 1) * [√2/2 - 1/2]<br/>
            x = (√3 - 1) * [(√2 - 1) / 2]
          </div>
        </div>
      ),
      highlight: "calc_x"
    },
    {
      title: "The Final Answer",
      content: (
        <div className="space-y-4">
          <p>We now have x. The question asks for the Diameter (2x).</p>
          <div className="font-serif text-center text-lg">
             2x = 2 * (√3 - 1) * [(√2 - 1) / 2]
          </div>
          <div className="font-serif text-center text-xl font-bold text-indigo-700 bg-indigo-50 p-2 rounded">
            (√3 - 1)(√2 - 1)
          </div>
          <p>This matches the form (√a + b)(√c + d) where:</p>
          <ul className="grid grid-cols-4 gap-2 text-center font-mono text-sm">
            <li className="bg-gray-100 p-1 rounded">a = 3</li>
            <li className="bg-gray-100 p-1 rounded">b = -1</li>
            <li className="bg-gray-100 p-1 rounded">c = 2</li>
            <li className="bg-gray-100 p-1 rounded">d = -1</li>
          </ul>
          <div className="mt-4 p-3 bg-green-100 text-green-800 rounded text-center font-bold">
            Sum = 3 + (-1) + 2 + (-1) = 3
          </div>
        </div>
      ),
      highlight: "final"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans text-slate-800 flex flex-col items-center">
      
      <header className="max-w-4xl w-full mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Proof - Inscribed Semicircles</h1>
        <p className="text-slate-500">Inscribed Semicircles & The Small Circle</p>
      </header>

      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-6 rounded-2xl shadow-xl">
        
        {/* Left Column: Interactive Diagram */}
        <div className="relative aspect-square bg-gray-50 rounded-xl border border-gray-200 overflow-hidden select-none">
          {/* ViewBox reverted to clip outer sections */}
          <svg viewBox="-0.1 -0.1 1.2 1.2" className="w-full h-full">
            
            {/* Definitions */}
            <defs>
              <pattern id="grid" width="0.1" height="0.1" patternUnits="userSpaceOnUse">
                <path d="M 0.1 0 L 0 0 0 0.1" fill="none" stroke="gray" strokeWidth="0.002" opacity="0.2"/>
              </pattern>
            </defs>

            {/* Grid & Square */}
            <rect x="0" y="0" width="1" height="1" fill="url(#grid)" />
            <rect x="0" y="0" width="1" height="1" fill="none" stroke="#334155" strokeWidth="0.01" />

            {/* 4 Semicircles (Inner, solid fill) */}
            {/* Top Semicircle (Visual Bottom): Center (R, 1). Start (0,1) End (2R, 1). Arc goes down. */}
            <path d={`M 0 1 A ${R} ${R} 0 0 0 ${2*R} 1`} fill="rgba(59, 130, 246, 0.15)" stroke="#3b82f6" strokeWidth="0.008" />
            
            {/* Right Semicircle: Center (1, 1-R). Start (1, 1) End (1, 1-2R). Arc goes left. */}
            <path d={`M 1 1 A ${R} ${R} 0 0 0 1 ${1 - 2*R}`} fill="rgba(59, 130, 246, 0.15)" stroke="#3b82f6" strokeWidth="0.008" />
            
            {/* Bottom Semicircle (Visual Top): Center (1-R, 0). Start (1, 0) End (1-2R, 0). Arc goes up. */}
            <path d={`M 1 0 A ${R} ${R} 0 0 0 ${1 - 2*R} 0`} fill="rgba(59, 130, 246, 0.15)" stroke="#3b82f6" strokeWidth="0.008" />
            
            {/* Left Semicircle: Center (0, R). Start (0, 0) End (0, 2R). Arc goes right. */}
            <path d={`M 0 0 A ${R} ${R} 0 0 0 0 ${2*R}`} fill="rgba(59, 130, 246, 0.15)" stroke="#3b82f6" strokeWidth="0.008" />

            {/* Ghost" semicircles for visual clarity */}
            {/* Top Left (Visual Top) */}
            <path d={`M 0 1 A ${R} ${R} 0 0 1 ${2*R} 1`} fill="none" stroke="#3b82f6" strokeWidth="0.005" strokeDasharray="0.02" opacity="0.4" />
            {/* Top Right (Visual Right) */}
            <path d={`M 1 1 A ${R} ${R} 0 0 1 1 ${1 - 2*R}`} fill="none" stroke="#3b82f6" strokeWidth="0.005" strokeDasharray="0.02" opacity="0.4" />
            {/* Bottom Right (Visual Bottom) */}
            <path d={`M 1 0 A ${R} ${R} 0 0 1 ${1 - 2*R} 0`} fill="none" stroke="#3b82f6" strokeWidth="0.005" strokeDasharray="0.02" opacity="0.4" />
            {/* Bottom Left (Visual Left) */}
            <path d={`M 0 0 A ${R} ${R} 0 0 1 0 ${2*R}`} fill="none" stroke="#3b82f6" strokeWidth="0.005" strokeDasharray="0.02" opacity="0.4" />

            {/* Small Circle (always visible) */}
            <circle cx="0.5" cy="0.5" r={RADIUS_SMALL} fill="rgba(239, 68, 68, 0.2)" stroke="#ef4444" strokeWidth="0.008" />


            {/* --- DYNAMIC OVERLAYS BASED ON STEP --- */}
            {/* Adjusted step indices to account for new Step 0 */}

            {/* Step 2 & 3 & 4: Calculating R */}
            {(step === 2 || step === 3 || step === 4) && (
              <g>
                {/* Centers */}
                <circle cx={centers[0].x} cy={centers[0].y} r="0.015" fill="#1e40af" />
                <circle cx={centers[1].x} cy={centers[1].y} r="0.015" fill="#1e40af" />
                
                {/* Triangle Logic */}
                <line x1={centers[0].x} y1={centers[0].y} x2={centers[1].x} y2={centers[1].y} stroke="#1e40af" strokeWidth="0.008" strokeDasharray="0.02" />
                
                {/* Triangle Legs (for step 3 visual) */}
                {step >= 3 && (
                  <>
                    <line x1={centers[0].x} y1={centers[0].y} x2={centers[1].x} y2={centers[0].y} stroke="#64748b" strokeWidth="0.005" />
                    <line x1={centers[1].x} y1={centers[0].y} x2={centers[1].x} y2={centers[1].y} stroke="#64748b" strokeWidth="0.005" />
                    
                    {/* Labels */}
                    <text x={(centers[0].x + centers[1].x)/2} y={centers[0].y - 0.02} fontSize="0.04" fill="#1e40af" textAnchor="middle">1 - r</text>
                    <text x={centers[1].x + 0.04} y={(centers[0].y + centers[1].y)/2} fontSize="0.04" fill="#1e40af">r</text>
                    <text x={(centers[0].x + centers[1].x)/2 - 0.05} y={(centers[0].y + centers[1].y)/2 + 0.05} fontSize="0.04" fill="#1e40af" fontWeight="bold">2r</text>
                  </>
                )}
              </g>
            )}

            {/* Step 5+: Small Circle Calculation */}
            {(step >= 5) && (
               <g>
                 <circle cx={squareCenter.x} cy={squareCenter.y} r="0.015" fill="#ef4444" />
                 <circle cx={centers[0].x} cy={centers[0].y} r="0.015" fill="#1e40af" />
                 
                 {/* Line connecting Square Center to Bottom Semicircle Center */}
                 <line x1={squareCenter.x} y1={squareCenter.y} x2={centers[0].x} y2={centers[0].y} stroke="#f97316" strokeWidth="0.008" />
                 
                 {step >= 6 && (
                    <>
                      {/* Triangle Legs for Distance Calc */}
                      <line x1={squareCenter.x} y1={squareCenter.y} x2={squareCenter.x} y2={centers[0].y} stroke="#94a3b8" strokeWidth="0.005" strokeDasharray="0.02" />
                      <line x1={squareCenter.x} y1={centers[0].y} x2={centers[0].x} y2={centers[0].y} stroke="#94a3b8" strokeWidth="0.005" strokeDasharray="0.02" />
                      
                      <text x={squareCenter.x + 0.02} y={(squareCenter.y + centers[0].y)/2} fontSize="0.04" fill="#f97316">0.5</text>
                      <text x={(squareCenter.x + centers[0].x)/2} y={centers[0].y - 0.02} fontSize="0.04" fill="#f97316">|0.5 - r|</text>
                    </>
                 )}
               </g>
            )}

          </svg>
          
          {/* Vertex Labels */}
          <div className="absolute top-2 left-2 text-xs text-gray-400">(0,1)</div>
          <div className="absolute top-2 right-2 text-xs text-gray-400">(1,1)</div>
          <div className="absolute bottom-2 left-2 text-xs text-gray-400">(0,0)</div>
          <div className="absolute bottom-2 right-2 text-xs text-gray-400">(1,0)</div>

        </div>

        {/* Right Column: Text & Controls */}
        <div className="flex flex-col justify-between">
          
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-bold">
                Step {step + 1} of {steps.length}
              </span>
              <h2 className="text-2xl font-bold text-slate-800">{steps[step].title}</h2>
            </div>
            
            <div className="text-lg text-slate-600 leading-relaxed">
              {steps[step].content}
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <button 
              onClick={() => setStep(Math.max(0, step - 1))}
              disabled={step === 0}
              className={`flex-1 py-3 px-4 rounded-lg flex items-center justify-center gap-2 font-semibold transition-colors
                ${step === 0 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50'}`}
            >
              <ArrowLeft size={20} /> Previous
            </button>
            
            <button 
              onClick={() => setStep(Math.min(steps.length - 1, step + 1))}
              disabled={step === steps.length - 1}
              className={`flex-1 py-3 px-4 rounded-lg flex items-center justify-center gap-2 font-semibold transition-colors
                ${step === steps.length - 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200'}`}
            >
              Next <ArrowRight size={20} />
            </button>
          </div>

        </div>
      </div>
      
      <div className="mt-8 text-slate-400 text-sm">
        Created with React & SVG
      </div>

    </div>
  );
};

export default VisualProof;