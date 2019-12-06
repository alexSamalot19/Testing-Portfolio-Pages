Both comments and coding works


```matlab

%McKinsey and Company Agronomic Data Scientist Code Sample
%Candidate: Alexander Samalot, M.S.

  for storm=3:109
    
    clearvars -except storm projPhase PredCorrGR KrigOutputs 
    
    StormIndex=num2str(storm);
    
    InputDir=fullfile(projPhase,[PredCorrGR,StormIndex]);
    OutputDir=fullfile(projPhase,[KrigOutputs,StormIndex]);
    mkdir(OutputDir)
end
