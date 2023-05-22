#include<bits/stdc++.h>
using namespace std;

class Node(
    int data;
    Node* left ;
    Node* right;

    Node(int d){
        data =d;
        left= NULL;
        right = NULL;
    }
);

Node * insertIntoBST(Node* root , int d){
    if(root == NULL){
        root = new Node(d);
        return root;
    }
    if ( d> root-> data){
        //right part me insert karna hai
        root->right = insertIntoBST(root->right , d);
    }

    else{
        root->left = insertIntoBST (root-> left ,d);
    }

    return root;

}

void takeinput( Node* & root){
    int data ;
    cin>>data;
    while(data != -1){
       root = insertIntoBST(root , data);
        cin>>data
    }
}

int main(){
    Node root = NULL;

    cout<<"Enter data to createe BST"<<endl;
    
    takeInput(root );
    
    return 0;
}