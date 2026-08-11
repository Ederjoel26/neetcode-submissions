class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
      unordered_map<string, vector<string>> hash;

      for (int i = 0; i < strs.size(); i++) {
        string key = strs[i];                 
        sort(key.begin(), key.end());
        hash[key].push_back(strs[i]);
      }
              
      vector<vector<string>> r;
      for (auto& [key, value]: hash) {
        vector<string> v;
        for(string& a: value) {
          v.push_back(a);
        }
        r.push_back(v);
      }

      return r;
    }
};

