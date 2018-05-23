<select-and-say values="{ opts.values | {} }">
    <h2>You picked: { choice }</h2>
    <select onchange="{ changed }">
        <option
            each="{ obj, index in opts.values }"
            value="{ obj.label }"
        >
            { obj.label }
        </option>
    </select>
    <script>
        var tag = this;
        tag.choice = 'nothin\' yet';
        tag.changed = (e) => {
            tag.choice = e.target.value;
        };
    </script>
</select-and-say>
