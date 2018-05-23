<s-select values="{ opts.values | {} }">
    <select>
        <option
            each="{ value, label in opts.values }"
            value="{ label }"
        >
            { value }
        </option>
    </select>
</s-select>
