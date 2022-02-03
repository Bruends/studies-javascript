# Bindings

## Interpolation {{ componentParameter }} 
show a component's parameter in template 

```html

<p>{{ msg }}</p>

```


## Property and style bindings [attr]="componentParameter" 
bind a parameter on component to the html or style property

```html
<p
    [id]="textId"
    [style.color]="textColor"
>
    text
</p>
```


## Event binding (event)="componentMethod()"
bind an event (ex: click)
to a method in the component

```html
 <button (click)="showMessage()" >
    Show Message
 </button>
```

## two way data binding w/ngmodel [(ngModel)]="componentParameter" 
combination of property and event binding

```html
 <input [(ngModel)]="nome" />
 <p>{{ nome }}</p>
```