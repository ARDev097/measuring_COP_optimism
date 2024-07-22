import React from 'react';
import '../styles/Instructions.css';

const Instructions = ({ showInstructions, handleClose, email, handleEmailChange, handleContinue, emailError }) => {
  if (!showInstructions) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 divouter">
      <div className="p-8 rounded-lg shadow-lg w-full max-w-lg outerdiv">
        <div className="instructiondiv">
          <h2 className="text-xl font-semibold">Instructions</h2>

        </div>
        <div className="p-6">
          <p className="mb-4">Welcome to the Council Share Calculator! This tool allows you to calculate the share of different houses, councils, and committees within the Optimism Collective. Please read through the instructions and parameter descriptions carefully before proceeding.</p>

          <h5 className="text-lg font-semibold mb-2">Parameters Descriptions:</h5>
          <ul className="list-disc pl-5 mb-4">
            <li><strong>Decision Making Authority:</strong> Evaluates the level of decision-making power vested in each house, council, or committee.</li>
            <li><strong>Scope of Influence:</strong> Assesses the range and extent of influence each body has over different areas of the Optimism Collective.</li>
            <li><strong>Community Engagement:</strong> Measures the level of engagement and interaction each body has with the wider community.</li>
            <li><strong>Operational Independence:</strong> Determines the degree of independence each body has in its operations and decision-making processes.</li>
            <li><strong>Voting Power:</strong> Quantifies the voting power held by each house, council, or committee.</li>
            <li><strong>Veto Power:</strong> Assesses the authority each body has to veto proposals or decisions made by other bodies.</li>
          </ul>

          <h5 className="text-lg font-semibold mb-2">How to Use the Calculator:</h5>
          <ol className="list-decimal pl-5 mb-4">
            <li><strong>Enter Your Email:</strong> Please provide your email address to proceed. This will allow us to save your configurations and results.</li>
            <li><strong>Set Weights for Parameters:</strong> Adjust the weightage for each of the six parameters. The total weight must add up to 100%.</li>
            <li><strong>Assign Scores:</strong> For each house, council, or committee, assign a score (0-5) for each parameter based on your assessment.</li>
            <li><strong>Calculate Shares:</strong> Once all weights and scores are set, click on the "Calculate Weighted Scores and Percentages" button to see the results.</li>
            <li><strong>Review Results:</strong> The results will display the calculated share percentages for each house, council, or committee. You can modify the weights and scores as needed and recalculate.</li>
          
          </ol>

          <h5 className="text-lg font-semibold mb-2">Example:</h5>
          <p className="mb-4">To help you get started, here's an example configuration:</p>
          <ul className="list-disc pl-5 mb-4">
            <li><strong>Weights:</strong> Decision Making Authority (35), Scope of Influence (25), Community Engagement (10), Operational Independence (10), Voting Power (10), Veto Power (5).</li>
            <li><strong>Scores:</strong> (Assign scores based on your evaluation of each house, council, or committee).</li>
          </ul>

          <h5 className="text-lg font-semibold mb-2">Enter your Email:</h5>

          <div className="mb-4 inpputdiv">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => handleEmailChange(e.target.value)}
              className={`w-full p-2 border rounded ${emailError ? 'border-red-500' : 'border-gray-300'}`}
            />
            {emailError && <p className="text-red-500 mt-2 emailerror">{emailError}</p>}
          </div>
        </div>
        <div className="flex justify-end p-4 border-t submitbtn">
          <button
            onClick={handleContinue}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 "
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
