# Reproduction of "Variable 'X' Doesn't exists on type Vue3Compo..."

The main reason of this is that variables are not resolved when using 
composition API and `@vue-macros/volar>0.27.4`, `vue@2.7.16`, `volar-vsc@2.1.6` and `VSCode@1.93.1`


![](/error-message-picture.png)
