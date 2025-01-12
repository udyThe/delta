// Online C++ compiler to run C++ program online
// #include <iostream>
#include <bits/stdc++.h>
using namespace std;

void selectionSort (vector<int> &v){
        int n = v.size();
    for (int i =0; i <(n-1); i++ ){
        int min = i;
        for (int j=i+1; j<n;j++){
            if (v[j]<v[min]){
                min =j;
            }
        }
        swap(v[i],v[min]);
    }
    
    for (int i=0; i<n;i++){
        cout << v[i] << " ";
    }
}



int main() {
    // int v[7,2,10,5,31,24,0,8,11];
    // vector<int> v = {7,2,10,5,31,24,0,8,11};
    int n;
    cin>> n;
    vector<int> v(n);
    for (int i = 0; i < n; i++) {
        cin >> v[i];
        }
    
    selectionSort(v);
    
    
    
    

    return 0;
}