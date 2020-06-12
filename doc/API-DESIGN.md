# Freestyle API Spike

## Freestyle's job

Component Driven Development: Provide a tight feedback loop when developing the visual aspects of components, including their many states, edgecases and others

It is NOT freestyle's job to be a primary source of documentation on how to use a component.

## Goals

1. Reduce boilerplate
2. Unify APIs between collection, dynamic, regular usages
3. Enable better freestyle UX
   * Automatic focusing
   * Hide show code, notes
   * Component display configuration
     * Background color (transparent, color)
     * Arg Display, grid (each option for a particular arg as rows or columns)
4. Obvious extensibility points for component documentation and argument discovery (ie: JSDoc, Typescript)

## Stretch Goals

* Colocate freestyle examples with the code

## Current Examples

### Standard Usage

```hbs
  <FreestyleUsage @slug='more-list-icon' @title='More List Icon'>
    <MoreList
        @morePages={{this.morePages}}
        @drillDown={{fn @logAction 'MoreList drillDown'}}
    />
  </FreestyleUsage>

```

### Collection

```hbs
      <FreestyleCollection as |Collection|>
        <Collection.variant @key="default">
            {{#freestyle-usage "mobile-panel" title="mobile-panel" useViewport=true}}
              <MobilePanel @title="Description">
                <p>The backbone is a servant. The clutches could be said to resemble unwet hardboards. A belief of the editorial is assumed to be an unsoft garden. A dock of the norwegian is assumed to be a pressing june.</p>
              </MobilePanel>
            {{/freestyle-usage}}
        </Collection.variant>

        <Collection.variant @key="full-bleed">
            {{#freestyle-usage "mobile-panel" title="mobile-panel" useViewport=true}}
              <MobilePanel @title="Description" @fullBleed={{true}}>
                <p>The backbone is a servant. The clutches could be said to resemble unwet hardboards. A belief of the editorial is assumed to be an unsoft garden. A dock of the norwegian is assumed to be a pressing june.</p>
              </MobilePanel>
            {{/freestyle-usage}}
        </Collection.variant>

        <Collection.variant @key="truncated">
          {{#freestyle-usage "mobile-panel" title="mobile-panel truncated" useViewport=true}}
            <MobilePanel @title="Description" @truncatedHeight={{250}}>
            <p>Those Saturdaies are nothing more than clubs. Unfortunately, that is wrong; on the contrary, a loan is a compleat title. In modern times a swishy stinger without buns is truly a cultivator of pointless odometers.</p>

            <p><img src="https://yapp-uploaded-images.s3.amazonaws.com/b0068734-7358-4e2f-b323-40219218c093/dollar-gill-411294.jpg"></p>

            <p>In recent years, a donald sees a brain as a flaunty chill. The home is a thunderstorm. The literature would have us believe that a gangling heaven is not but an organization. One cannot separate lightnings from maxi tyveks.</p>

            <p>A spear of the piccolo is assumed to be a glaring willow. In modern times their makeup was, in this moment, a bubbly soprano. However, an olive is the professor of a spandex. A driver can hardly be considered a lengthways hydrogen without also being an experience.</p>
            </MobilePanel>
          {{/freestyle-usage}}
        </Collection.variant>
      </FreestyleCollection>
```

### Dynamic

```hbs
      {{#freestyle-usage "progress-bar" title="progress-bar" class="theme-background viewport-width relative"}}
        {{#freestyle-dynamic 'dynamic-properties'
            dynamicProperties=(hash
              percent=(hash
                value=0.5
                inputType='range'
                min=0
                max=1
              )
            )
            as |dynamic|
        }}
          <ProgressBar
            @label="A Label"
            @percentComplete={{dynamic.percent}}
           />
        {{/freestyle-dynamic}}
      {{/freestyle-usage}}
```

### Sections

// #TODO

## Proposed APIs

### Standard

```hbs
<Freestyle::Usage @title='More List Icon'>
  <MoreList
      @morePages={{this.morePages}}
      @drillDown={{fn @logAction 'MoreList drillDown'}}
  />
</Freestyle::Usage>
```

is equivalent to

```hbs
<Freestyle::Usage @title='More List Icon'>
  <:example>
    <MoreList
        @morePages={{this.morePages}}
        @drillDown={{fn @logAction 'MoreList drillDown'}}
    />
  </:example>
</Freestyle::Usage>
```

### "Control Panel"

```hbs
  <Freestyle::Usage @title="YInput">
    <:control-panel as |Controls|>
      <Controls.String @name="label" @value="A Label" />
      <Controls.String @name="value" @value="The Value" />
      <Controls.Array @name="errors" /> # Comma separated list of strings
      <Controls.Array @name="warnings" />
      <Controls.Bool @name="disabled" @value={{false}} />
      <Controls.Bool @name="autofocus" @value={{false}} />
    </:control-panel>

    <:note>
      {{lorem-ipsum 3 'sentences'}}
    </:note>

    <:example as |values log|>
      <YInput
        @label={{values.label}}
        @value={{values.value}}
        @errors={{values.errors}}
        @warnings={{values.warnings}}
        @disabled={{values.disabled}}
        @autofocus={{values.autofocus}}
        @onInput={{log 'onInput'}}
        @onFocusOut={{log 'onFocusOut'}}
      />
    </:example>
  </Freestyle::Usage>
```

```hbs
<Freestyle::Usage @title="YBUtton">
  <:control-panel as |Controls|>
    <Controls.String @name="label" @value="A Label" />
    <Controls.Bool @name="disabled" @value={{false}}  />
    <Controls.Bool @name="busy" @value={{false}}  />
    <Controls.Options
      @name="size"
      @values={{w "small normal large"}} 
    />
    <Controls.Options
      @name="style"
      @value="normal"
      @values={{w 'normal outline inverse link'}}
    />
  </:control-panel>

  <:example as |values|>
    <YButton
      @label={{values.label}}
      @size={{values.size}}
      @style={{values.style}}
      @disabled={{values.disabled}}
      @busy={{values.busy}}
    />
  </:example>
</Freestyle::Usage>
```

### "Collection"

Trying to bundle bespoke collection behavior into Freestyle::Usage is too much and it should be a separate component:

```hbs
<Freestyle::Collection @title="Mobile Panel" as |Collection|>
  <:control-panel>
    <!-- settings here would result in dynamic values passed to each usage -->
  <:/control-panel>

  <Collection.Usage @title="Standard">
    <MobilePanel @title="Description">
      <p>{{lorem-ipsum 3 'sentences'}}</p>
    </MobilePanel>
  </Collection.Usage>

  <Collection.Usage @title="Full Bleed">
    <:example>
      <MobilePanel @title="Description" @fullBleed={{true}}>
        <p>{{lorem-ipsum 3 'sentences'}}</p>
      </MobilePanel>
    </:example>
  </Collection.Usage>

  <Collection.Usage @title="Truncated">
    <:note>
      When truncatedHeight is set, panel will show a "Read More" button if content exceeds the specified height.
    </:note>
    <:control-panel>
      <!-- settings here would result in dynamic values passed to just this usage -->
    <:/control-panel>
    <:example as |values|>
      <MobilePanel @title="Description" @truncatedHeight={{250}}>
        <p>{{lorem-ipsum 3 'sentences'}}</p>

        <p><img src="https://yapp-uploaded-images.s3.amazonaws.com/b0068734-7358-4e2f-b323-40219218c093/dollar-gill-411294.jpg"></p>

        <p>{{lorem-ipsum 3 'sentences'}}</p>

        <p>{{lorem-ipsum 5 'sentences'}}</p>
      </MobilePanel>
    </:example>
  </Collection.Usage>

</Freestyle::Collection>
``` 

For the tabular presentation idea, here's a possible approach. The values passed as `@rows` and
`@columns` are used to determine the dimensions of the grid and to pass values
to the :example block, which would be repeated for each cell.

```hbs
<Freestyle::Table @title="Yapp Button"
  @rows={{array
    (hash color="blue")
    (hash color="green")
    (hash color="red")
    (hash color="gray")
  }}
  @columns={{array
    (hash inverse=true)
    (hash disabled=true)
    (hash busy=true)
  }}
>
  <:example as |values|>
    <YappButton
      @color={{values.color}}
      @inverse={{values.inverse}}
      @disabled={{values.disabled}}
      @busy={{values.busy}}
    />
  </:example>
</Freestyle::Table>
```

And here's another version of the above, showing how you could also incorporate
a control-panel for dynamically tweaking another dimension and it could use
helpers to make the rows/columns more succinct:

```hbs
<Freestyle::Table @title="Yapp Button"
  @rows={{variant-pairs 'color' (array 'blue' 'green' 'red' 'gray')}}
  @columns={{key-value-pairs
    inverse=true
    disabled=true
    busy=true
  )}}
>
  <:control-panel as |Controls|>
    <Controls.Slider @name="size" @value={{24}} @start={{12}} @end={{48}} />
  </:control-panel>

  <:example as |values|>
    <YappButton
      @color={{values.color}}
      @inverse={{values.inverse}}
      @disabled={{values.disabled}}
      @busy={{values.busy}}
      @size={{values.size}}
    />
  </:example>
</Freestyle::Table>
```

This idea is an attempt to capture an idea of presets.

```hbs
<Freestyle::Usage @title="Mobile Panel">
  <:control-panel as |Controls|>
    <Controls.Html @name="exampleHtml" @value={{lorem-html '1 paragraph'}} />
    <Controls.Bool @name="fullBleed" />
    <Controls.Number @name="truncatedHeight" />
    <Controls.Presets as |Preset|>
      <Preset @name="Standard" @values={{hash fullBleed=false truncatedHeight=null}}>
      <Preset @name="Full Bleed" @values={{hash fullBleed=true truncatedHeight=null}}>
      <Preset @name="Truncated" @values={{hash fullBleed=false truncatedHeight=250}}>
    </Controls.Preset>
  <:/control-panel>
  
  <:example>
    <MobilePanel @title="Description" @truncatedHeight={{values.truncatedHeight}} @fullBleed={{values.fullBleed}}>
      {{values.exampleHtml}}
    </MobilePanel>
  </:example>
</Freestyle::Usage>
```
