class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        vector<vector<string>> vecAnagrams = {};
        vector<int> avoidIndexes = {};

        for (int i = 0; i < strs.size(); i++) {
            vector<string> vecAux = { strs[i] };
            
            bool bAvoid = false;
            for (int x = 0; x < avoidIndexes.size(); x++) {
                if (avoidIndexes[x] == i) {
                    bAvoid = true;
                }
            }

            if (bAvoid == true) continue;

            for (int j = 0; j < strs.size(); j++) {
                if (i == j) continue;

                bool bAvoid = false;
                for (int x = 0; x < avoidIndexes.size(); x++) {
                    if (avoidIndexes[x] == i) {
                        bAvoid = true;
                    }
                }

                if (bAvoid == true) continue;

                string aux = strs[i];
                string auxTwo = strs[j];

                sort(aux.begin(), aux.end());
                sort(auxTwo.begin(), auxTwo.end());

                if (aux == auxTwo) {
                    vecAux.push_back(strs[j]);
                    avoidIndexes.push_back(j);
                } 
            }

            vecAnagrams.push_back(vecAux);
        }

        return vecAnagrams;
    }
};
