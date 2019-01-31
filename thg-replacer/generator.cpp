#include <bits/stdc++.h>

using namespace std;

int main(){
    /*
    <h5>1.</h5>
        <div class="row">
            <div class="col-md-6">
                <label for="nome1">Nome no jogo</label>
                <input type="text" class="form-control" id="nome1">
            </div>
            <div class="col-md-6">
                <label for="cont1">Nome do contato</label>
                <input type="text" class="form-control" id="cont1">
            </div>
        </div>
    */
   FILE* fd;
   fd = fopen("n.txt", "w");
   for(int i=1;i<=24;i++){
       fprintf(fd, "<h5>%d.</h5>\n", i);
       fprintf(fd, "<div class=\"row\">\n");
       fprintf(fd, "\t<div class=\"col-md-6\">\n");
       fprintf(fd, "\t\t<label for=\"nome%d\">Nome no jogo</label>\n", i);
       fprintf(fd, "\t\t<input type=\"text\" class=\"form-control\" id=\"nome%d\">\n", i);
       fprintf(fd, "\t</div>\n");
       fprintf(fd, "\t<div class=\"col-md-6\">\n");
       fprintf(fd, "\t\t<label for=\"cont%d\">Nome do contato</label>\n", i);
       fprintf(fd, "\t\t<input type=\"text\" class=\"form-control\" id=\"cont%d\">\n", i);
       fprintf(fd, "\t</div>\n");
       fprintf(fd, "</div>\n");
   }
    return 0;
}