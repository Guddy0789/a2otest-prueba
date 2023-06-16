class ExerciseData:
    def __init__(self, t):
        self.t = t.lower()
    
    def counterSubchains(self, s):
        counter=0
        for i in range(len(self.t)):
            for j in range(i + 1, len(self.t) + 1):
                 #for j in range(i + 1, len(self.t)):sin el mas 1, probando ssplice
                 subString = self.t[i:j]
                #  if(substring===s):
                 if(subString==s):
                     counter+=1
        #return lenght(s) * counter
        return len(s) * counter
    
    def calculate_result(self):
        contadorMax = 0
        for i in range(len(self.t)):
            for j in range(i + 1, len(self.t) + 1):
                subString = self.t[i:j]
                contadorMax = max(contadorMax, self.counterSubchains(subString))
        return contadorMax
            
        
        

        
