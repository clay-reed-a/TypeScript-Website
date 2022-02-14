define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sandboxThemeDark = exports.sandboxTheme = void 0;
    const blue = "3757ef";
    const darkerBlue = "1142AF";
    const grey = "6c6f2d";
    const greenDark = "0c840a";
    const green = "7caf3d"; // dark mode comment color
    exports.sandboxTheme = {
        base: "vs",
        inherit: true,
        rules: [
            { token: "", foreground: "000000", background: "fffffe" },
            { token: "invalid", foreground: "cd3131" },
            { token: "emphasis", fontStyle: "italic" },
            { token: "strong", fontStyle: "bold" },
            { token: "variable", foreground: "11bb11" },
            { token: "variable.predefined", foreground: "4864AA" },
            { token: "constant", foreground: "44ee11" },
            { token: "comment", foreground: grey },
            { token: "number", foreground: greenDark },
            { token: "number.hex", foreground: "3030c0" },
            { token: "regexp", foreground: "#811f3f" },
            { token: "annotation", foreground: "808080" },
            { token: "type", foreground: darkerBlue },
            { token: "delimiter", foreground: "000000" },
            { token: "delimiter.html", foreground: "383838" },
            { token: "delimiter.xml", foreground: "0000FF" },
            { token: "tag", foreground: "800000" },
            { token: "key", foreground: "863B00" },
            { token: "string.key.json", foreground: "A31515" },
            { token: "string.value.json", foreground: "0451A5" },
            { token: "string", foreground: greenDark },
            { token: "keyword", foreground: blue },
            { token: "keyword.json", foreground: "0451A5" },
        ],
        colors: {
            editorBackground: "#fafafa",
            editorForeground: "#000000",
            editorInactiveSelection: "#E5EBF1",
            editorIndentGuides: "#D3D3D3",
            editorActiveIndentGuides: "#939393",
            editorSelectionHighlight: "#ADD6FF4D",
        },
    };
    exports.sandboxThemeDark = {
        base: "vs-dark",
        inherit: true,
        rules: [
            { token: "constant", foreground: "44ee11" },
            { token: "comment", foreground: green },
            { token: "regexp", foreground: "#811f3f" },
        ],
        colors: {
        // 'editor.background': '#313131',
        },
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zYW5kYm94L3NyYy90aGVtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBQUEsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFBO0lBQ3JCLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQTtJQUUzQixNQUFNLElBQUksR0FBRyxRQUFRLENBQUE7SUFDckIsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFBO0lBQzFCLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQSxDQUFDLDBCQUEwQjtJQUVwQyxRQUFBLFlBQVksR0FBd0Q7UUFDL0UsSUFBSSxFQUFFLElBQUk7UUFDVixPQUFPLEVBQUUsSUFBSTtRQUNiLEtBQUssRUFBRTtZQUNMLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUU7WUFDekQsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUU7WUFDMUMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUU7WUFDMUMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7WUFFdEMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUU7WUFDM0MsRUFBRSxLQUFLLEVBQUUscUJBQXFCLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRTtZQUN0RCxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRTtZQUMzQyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRTtZQUN0QyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRTtZQUMxQyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRTtZQUM3QyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRTtZQUMxQyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRTtZQUM3QyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRTtZQUV6QyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRTtZQUM1QyxFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFO1lBQ2pELEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFO1lBRWhELEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFO1lBRXRDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFO1lBQ3RDLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUU7WUFDbEQsRUFBRSxLQUFLLEVBQUUsbUJBQW1CLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRTtZQUVwRCxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRTtZQUUxQyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRTtZQUN0QyxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRTtTQUNoRDtRQUNELE1BQU0sRUFBRTtZQUNOLGdCQUFnQixFQUFFLFNBQVM7WUFDM0IsZ0JBQWdCLEVBQUUsU0FBUztZQUMzQix1QkFBdUIsRUFBRSxTQUFTO1lBQ2xDLGtCQUFrQixFQUFFLFNBQVM7WUFDN0Isd0JBQXdCLEVBQUUsU0FBUztZQUNuQyx3QkFBd0IsRUFBRSxXQUFXO1NBQ3RDO0tBQ0YsQ0FBQTtJQUVZLFFBQUEsZ0JBQWdCLEdBQXdEO1FBQ25GLElBQUksRUFBRSxTQUFTO1FBQ2YsT0FBTyxFQUFFLElBQUk7UUFDYixLQUFLLEVBQUU7WUFDTCxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRTtZQUMzQyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRTtZQUN2QyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRTtTQUMzQztRQUNELE1BQU0sRUFBRTtRQUNOLGtDQUFrQztTQUNuQztLQUNGLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBibHVlID0gXCIzNzU3ZWZcIlxuY29uc3QgZGFya2VyQmx1ZSA9IFwiMTE0MkFGXCJcblxuY29uc3QgZ3JleSA9IFwiNmM2ZjJkXCJcbmNvbnN0IGdyZWVuRGFyayA9IFwiMGM4NDBhXCJcbmNvbnN0IGdyZWVuID0gXCI3Y2FmM2RcIiAvLyBkYXJrIG1vZGUgY29tbWVudCBjb2xvclxuXG5leHBvcnQgY29uc3Qgc2FuZGJveFRoZW1lOiBpbXBvcnQoXCJtb25hY28tZWRpdG9yXCIpLmVkaXRvci5JU3RhbmRhbG9uZVRoZW1lRGF0YSA9IHtcbiAgYmFzZTogXCJ2c1wiLFxuICBpbmhlcml0OiB0cnVlLFxuICBydWxlczogW1xuICAgIHsgdG9rZW46IFwiXCIsIGZvcmVncm91bmQ6IFwiMDAwMDAwXCIsIGJhY2tncm91bmQ6IFwiZmZmZmZlXCIgfSxcbiAgICB7IHRva2VuOiBcImludmFsaWRcIiwgZm9yZWdyb3VuZDogXCJjZDMxMzFcIiB9LFxuICAgIHsgdG9rZW46IFwiZW1waGFzaXNcIiwgZm9udFN0eWxlOiBcIml0YWxpY1wiIH0sXG4gICAgeyB0b2tlbjogXCJzdHJvbmdcIiwgZm9udFN0eWxlOiBcImJvbGRcIiB9LFxuXG4gICAgeyB0b2tlbjogXCJ2YXJpYWJsZVwiLCBmb3JlZ3JvdW5kOiBcIjExYmIxMVwiIH0sXG4gICAgeyB0b2tlbjogXCJ2YXJpYWJsZS5wcmVkZWZpbmVkXCIsIGZvcmVncm91bmQ6IFwiNDg2NEFBXCIgfSxcbiAgICB7IHRva2VuOiBcImNvbnN0YW50XCIsIGZvcmVncm91bmQ6IFwiNDRlZTExXCIgfSxcbiAgICB7IHRva2VuOiBcImNvbW1lbnRcIiwgZm9yZWdyb3VuZDogZ3JleSB9LFxuICAgIHsgdG9rZW46IFwibnVtYmVyXCIsIGZvcmVncm91bmQ6IGdyZWVuRGFyayB9LFxuICAgIHsgdG9rZW46IFwibnVtYmVyLmhleFwiLCBmb3JlZ3JvdW5kOiBcIjMwMzBjMFwiIH0sXG4gICAgeyB0b2tlbjogXCJyZWdleHBcIiwgZm9yZWdyb3VuZDogXCIjODExZjNmXCIgfSxcbiAgICB7IHRva2VuOiBcImFubm90YXRpb25cIiwgZm9yZWdyb3VuZDogXCI4MDgwODBcIiB9LFxuICAgIHsgdG9rZW46IFwidHlwZVwiLCBmb3JlZ3JvdW5kOiBkYXJrZXJCbHVlIH0sXG5cbiAgICB7IHRva2VuOiBcImRlbGltaXRlclwiLCBmb3JlZ3JvdW5kOiBcIjAwMDAwMFwiIH0sXG4gICAgeyB0b2tlbjogXCJkZWxpbWl0ZXIuaHRtbFwiLCBmb3JlZ3JvdW5kOiBcIjM4MzgzOFwiIH0sXG4gICAgeyB0b2tlbjogXCJkZWxpbWl0ZXIueG1sXCIsIGZvcmVncm91bmQ6IFwiMDAwMEZGXCIgfSxcblxuICAgIHsgdG9rZW46IFwidGFnXCIsIGZvcmVncm91bmQ6IFwiODAwMDAwXCIgfSxcblxuICAgIHsgdG9rZW46IFwia2V5XCIsIGZvcmVncm91bmQ6IFwiODYzQjAwXCIgfSxcbiAgICB7IHRva2VuOiBcInN0cmluZy5rZXkuanNvblwiLCBmb3JlZ3JvdW5kOiBcIkEzMTUxNVwiIH0sXG4gICAgeyB0b2tlbjogXCJzdHJpbmcudmFsdWUuanNvblwiLCBmb3JlZ3JvdW5kOiBcIjA0NTFBNVwiIH0sXG5cbiAgICB7IHRva2VuOiBcInN0cmluZ1wiLCBmb3JlZ3JvdW5kOiBncmVlbkRhcmsgfSxcblxuICAgIHsgdG9rZW46IFwia2V5d29yZFwiLCBmb3JlZ3JvdW5kOiBibHVlIH0sXG4gICAgeyB0b2tlbjogXCJrZXl3b3JkLmpzb25cIiwgZm9yZWdyb3VuZDogXCIwNDUxQTVcIiB9LFxuICBdLFxuICBjb2xvcnM6IHtcbiAgICBlZGl0b3JCYWNrZ3JvdW5kOiBcIiNmYWZhZmFcIixcbiAgICBlZGl0b3JGb3JlZ3JvdW5kOiBcIiMwMDAwMDBcIixcbiAgICBlZGl0b3JJbmFjdGl2ZVNlbGVjdGlvbjogXCIjRTVFQkYxXCIsXG4gICAgZWRpdG9ySW5kZW50R3VpZGVzOiBcIiNEM0QzRDNcIixcbiAgICBlZGl0b3JBY3RpdmVJbmRlbnRHdWlkZXM6IFwiIzkzOTM5M1wiLFxuICAgIGVkaXRvclNlbGVjdGlvbkhpZ2hsaWdodDogXCIjQURENkZGNERcIixcbiAgfSxcbn1cblxuZXhwb3J0IGNvbnN0IHNhbmRib3hUaGVtZURhcms6IGltcG9ydChcIm1vbmFjby1lZGl0b3JcIikuZWRpdG9yLklTdGFuZGFsb25lVGhlbWVEYXRhID0ge1xuICBiYXNlOiBcInZzLWRhcmtcIixcbiAgaW5oZXJpdDogdHJ1ZSxcbiAgcnVsZXM6IFtcbiAgICB7IHRva2VuOiBcImNvbnN0YW50XCIsIGZvcmVncm91bmQ6IFwiNDRlZTExXCIgfSxcbiAgICB7IHRva2VuOiBcImNvbW1lbnRcIiwgZm9yZWdyb3VuZDogZ3JlZW4gfSxcbiAgICB7IHRva2VuOiBcInJlZ2V4cFwiLCBmb3JlZ3JvdW5kOiBcIiM4MTFmM2ZcIiB9LFxuICBdLFxuICBjb2xvcnM6IHtcbiAgICAvLyAnZWRpdG9yLmJhY2tncm91bmQnOiAnIzMxMzEzMScsXG4gIH0sXG59XG4iXX0=